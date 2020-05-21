import produce from 'immer';

export default function CartReducer(state = [], action) {
  switch (action.type) {
    case '@cart/ADD':
      return produce(state, (draft) => {
        const index = draft.findIndex(
          (product) => product.id === action.product.id
        );
        if (index < 0) {
          draft.push({...action.product, amount: 1});
        } else {
          draft[index].amount += 1;
        }
      });
    default:
      return state;
  }
}
