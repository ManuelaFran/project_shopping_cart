  const fetchProducts = async (listProducts) => {
    try {
    const endpoint = `https://api.mercadolibre.com/sites/MLB/search?q=${listProducts}`;
    const response = await fetch(endpoint);
    const data = await response.json();
    return data;
  } catch (error) {
    return error;
  }
  };

fetchProducts('computador');

if (typeof module !== 'undefined') {
  module.exports = {
    fetchProducts,
  };
}
