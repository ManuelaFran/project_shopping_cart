/* eslint-disable sonarjs/no-extra-arguments */
const fetchProducts = () => {
  const url = 'https://api.mercadolibre.com/sites/MLB/search?q=$QUERY';
};

fetchProducts('computador');

if (typeof module !== 'undefined') {
  module.exports = {
    fetchProducts,
  };
}
