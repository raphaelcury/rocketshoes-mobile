export const addToCartRequest = (product, amount) => ({
  type: '@cart/ADD_REQUEST',
  product,
  amount,
});

export const addToCartSuccess = (product) => ({
  type: '@cart/ADD_SUCCESS',
  product,
});

export const updateAmount = (productId, amount) => ({
  type: '@cart/UPDATE_AMOUNT',
  productId,
  amount,
});

export const deleteFromCart = (productId) => ({
  type: '@cart/DELETE',
  productId,
});
