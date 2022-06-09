export const initialState = {
  basket: [],
};

//Selector
export const getBasketTotal = (basket) =>
basket?.reduce((amount, item) => item.price + amount, 0);
//NOTES
//amount = current amount
//item = iterate through each item
//item.price = get the item.price plus the amount
//0 = initial value of the amount is 0

const reducer = (state, action) => {
  console.log(action);
  
  switch(action.type) {
    case 'ADD_TO_BASKET':
      return {
        ...state,
        basket: [...state.basket, action.item],
      };

      default:
        return state;
  }
}

export default reducer;