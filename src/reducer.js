export const initialState = {
  basket: ["bread","butter"],
};

//anything inside the data layer is known as state, we manipulate the data layer with action (add to basket, remove from basket).
function reducer(state, action) {
  switch (action.type) {
    case "ADD_TO_BASKET":
      //logic for adding item to basket
      break;
    case "REMOVE_FROM_BASKET":
      //logic for removing item from basket
      break;
    default:
      return state;
  }
}

export default reducer;