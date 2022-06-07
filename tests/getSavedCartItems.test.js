const localStorageSimulator = require('../mocks/localStorageSimulator');
const getSavedCartItems = require('../helpers/getSavedCartItems');

localStorageSimulator('getItem');

describe('4 - Teste a função getSavedCartItems', () => {
  test('deve testar se ao executar a função, o método localStorage.getItem é chamado', async() => {
    await getSavedCartItems();
    expect(localStorage.getItem).toHaveBeenCalled();
  });

  test('deve testar se ao executar a função, o método localStorage.getItem é chamado com o "cartItems" como parâmetro', async() => {
    await getSavedCartItems();
    expect(localStorage.getItem).toHaveBeenCalledWith('cartItems');
  });
});
