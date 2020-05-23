import {all} from 'redux-saga/effects';

import AddToCartSagas from './Cart/sagas';

export default function* rootSaga() {
  return yield all([AddToCartSagas]);
}
