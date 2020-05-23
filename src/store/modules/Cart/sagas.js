import {Alert} from 'react-native';
import {call, select, put, all, takeLatest} from 'redux-saga/effects';
import api from '../../../services/api';

import {addToCartSuccess, updateAmountSuccess} from './actions';

function* verifyStock(productId, amount) {
  const response = yield call(api.get, `/stock/${productId}`);
  const stockAmount = response.data.amount;
  if (amount <= stockAmount) {
    return true;
  }
  Alert.alert('Quantidade solicitada fora de estoque');
  return false;
}

function* addToCartRequest({product}) {
  const existingProduct = yield select((state) =>
    state.CartReducer.find((p) => p.id === product.id)
  );
  let amount = 0;
  if (existingProduct) {
    amount = existingProduct.amount + 1;
  } else {
    amount = 1;
  }
  if (yield verifyStock(product.id, amount)) {
    yield put(addToCartSuccess(product));
  }
}

function* updateAmountRequest({productId, amount}) {
  const existingProduct = yield select((state) =>
    state.CartReducer.find((p) => p.id === productId)
  );
  if (existingProduct && (yield verifyStock(productId, amount))) {
    yield put(updateAmountSuccess(productId, amount));
  }
}

export default all([
  takeLatest('@cart/ADD_REQUEST', addToCartRequest),
  takeLatest('@cart/UPDATE_AMOUNT_REQUEST', updateAmountRequest),
]);
