export const initialState = {
  basket: [],
};

function reducer(state, action) {
  switch (action.type) {
    case "ADD_TO_BASKET":
      //logic
      break;
    case "REMOVE_FROM_BASKET":
      //logic
      break;
    default:
      return state;
  }
}
