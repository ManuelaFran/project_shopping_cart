require('../mocks/fetchSimulator');
const { fetchItem } = require('../helpers/fetchItem');
const item = require('../mocks/item');

describe('2 - Teste a função fetchItem', () => {
  test('deve testar se fetchItem é uma função', async() => {
    expect(typeof await fetchItem).toEqual('function');
  });
  
  test('deve passar "MLB1615760527" como argumento e testar se fetch foi chamada', async() => {
    await fetchItem('MLB1615760527');
    expect(fetch).toHaveBeenCalled();
  });

  test('com o argumento "MLB1615760527", a função fetch deve ser chamada com o endpoint correto', async() => {
    const endpoint = 'https://api.mercadolibre.com/items/MLB1615760527';
    await fetchItem('MLB1615760527');
    expect(fetch).toHaveBeenCalledWith(endpoint);
  });

  test('deve testar se o retorno da função com o argumento "MLB1615760527" é uma estrutura de dados igual ao objeto "item"', async() => {
    const response = await fetchItem('MLB1615760527');
    expect(response).toEqual(item);
  })

  test('deve testar se, ao chamar a função sem argumento retorna um erro com a mensagem: "You must provide an url"', 
  async() => {
    const response = await fetchItem();
    expect(response).toEqual(new Error('You must provide an url'));
  })
});
