import produce from 'immer';

export default function CartReducer(state = [], action) {
  console.tron.log(action.product);
  switch (action.type) {
    case '@cart/ADD':
      return produce(state, (draft) => {
        draft.push(action.product);
      });
    default:
      return state;
  }
}
