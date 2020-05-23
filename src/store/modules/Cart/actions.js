export const addToCartRequest = (product, amount) => ({
  type: '@cart/ADD_REQUEST',
  product,
  amount,
});

export const addToCartSuccess = (product) => ({
  type: '@cart/ADD_SUCCESS',
  product,
});

export const updateAmountRequest = (productId, amount) => ({
  type: '@cart/UPDATE_AMOUNT_REQUEST',
  productId,
  amount,
});

export const updateAmountSuccess = (productId, amount) => ({
  type: '@cart/UPDATE_AMOUNT_SUCCESS',
  productId,
  amount,
});

export const deleteFromCart = (productId) => ({
  type: '@cart/DELETE',
  productId,
});
