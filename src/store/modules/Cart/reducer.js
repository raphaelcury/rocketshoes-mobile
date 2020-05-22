import produce from 'immer';

export default function CartReducer(state = [], action) {
  switch (action.type) {
    case '@cart/ADD':
      return produce(state, (draft) => {
        const index = draft.findIndex(
          (product) => product.id === action.product.id
        );
        if (index >= 0) {
          draft[index].amount += 1;
        } else {
          draft.push({...action.product, amount: 1});
        }
      });
    case '@cart/UPDATE_AMOUNT':
      return produce(state, (draft) => {
        if (action.amount <= 0) {
          return;
        }
        const index = draft.findIndex(
          (product) => product.id === action.productId
        );
        if (index >= 0) {
          draft[index].amount = action.amount;
        }
      });
    default:
      return state;
  }
}
