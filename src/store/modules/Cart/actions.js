export const addToCart = (product) => ({
  type: '@cart/ADD',
  product,
});

export const updateAmount = (productId, amount) => ({
  type: '@cart/UPDATE_AMOUNT',
  productId,
  amount,
});