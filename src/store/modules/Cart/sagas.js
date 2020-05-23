import {Alert} from 'react-native';
import {call, select, put, all, takeLatest} from 'redux-saga/effects';
import api from '../../../services/api';

import {addToCartSuccess} from './actions';

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
  const response = yield call(api.get, `/stock/${product.id}`);
  const stockAmount = response.data.amount;
  if (amount <= stockAmount) {
    yield put(addToCartSuccess(product));
  } else {
    Alert.alert('Quantidade solicitada fora de estoque');
  }
}

export default all([takeLatest('@cart/ADD_REQUEST', addToCartRequest)]);
