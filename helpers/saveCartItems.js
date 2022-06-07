const saveCartItems = (saveItems) => {
  localStorage.setItem('cartItems', saveItems);
};

if (typeof module !== 'undefined') {
  module.exports = saveCartItems;
}
