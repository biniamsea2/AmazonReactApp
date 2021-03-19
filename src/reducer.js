export const initialState = {
  basket: [{
    id: "49823",
    title:"Testing test",
    price:5.99,
    rating:5,
    image:"https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg"
  }],
  user: null,
};

//anything inside the data layer is known as state, we manipulate the data layer with action (add to basket, remove from basket).
const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "ADD_TO_BASKET":
      //logic for adding item to basket
      return { 
        //after you dispatch an action you have to return the update
        ...state,
        //return the state but change the basket
        basket: [...state.basket, action.item]
       };
    case "REMOVE_FROM_BASKET":
      //logic for removing item from basket
      return { state };
    default:
      return state;
  }
};

export default reducer;
