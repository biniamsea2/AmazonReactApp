// selector in order to get total amount of items in checkout
export const getBasketTotal = (basket) =>
  basket?.reduce((amount, item) => item.price + amount, 0);

export const initialState = {
  basket: [],
  user: null,
};

//anything inside the data layer is known as state, we manipulate the data layer with action (add to basket, remove from basket).
const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "SET_USER":
      return {
        //return current state
        ...state,
        //set the user to whatever the authenticated user was
        user: action.user
      }
    case "ADD_TO_BASKET":
      //logic for adding item to basket
      return {
        //after you dispatch an action you have to return the update
        ...state,
        //return the state but change the basket
        basket: [...state.basket, action.item],
      };
    case "REMOVE_FROM_BASKET":
      //logic for removing item from basket
      //copy the old basket into a new basket
      let newBasket = [...state.basket];

      // store the index of the item in a variable
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );

      if (index >= 0) {
        //item exist in basket, now remove it
        newBasket.splice(index, 1);
      } else {
        console.warn(`Can't remove product (id: ${action.id})`);
      }

      //return state to what is previously was but change basket to newbasket
      return {
        ...state,
        basket: newBasket,
      };
    default:

      return state;
  }
};

export default reducer;
