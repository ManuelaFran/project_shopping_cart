const emptyCart = document.querySelector('.empty-cart');
const cleanCart = () => {
  ol.innerHTML = '';
};
emptyCart.addEventListener('click', cleanCart);

const createProductImageElement = (imageSource) => {
  const img = document.createElement('img');
  img.className = 'item__image';
  img.src = imageSource;
  return img;
};

const createCustomElement = (element, className, innerText) => {
  const e = document.createElement(element);
  e.className = className;
  e.innerText = innerText;
  return e;
};

const createProductItemElement = ({ id: sku, title: name, thumbnail: image }) => {
  fetchProducts();
  const section = document.createElement('section');
  section.className = 'item';

  section.appendChild(createCustomElement('span', 'item__sku', sku));
  section.appendChild(createCustomElement('span', 'item__title', name));
  section.appendChild(createProductImageElement(image));
  section.appendChild(createCustomElement('button', 'item__add', 'Adicionar ao carrinho!'));

  return section;
};

const product = document.querySelector('.items');
const products = () => {
  fetchProducts('computador')
  .then((item) => item.results
  .forEach((items) =>
  product.appendChild(createProductItemElement(items))));
};

const getSkuFromProductItem = (item) => item.querySelector('span.item__sku').innerText;

const cartItemClickListener = (event) => {
  const remove = event.target;
  remove.parentNode.removeChild(remove);
};

const createCartItemElement = ({ id: sku, title: name, price: salePrice }) => {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = `SKU: ${sku} | NAME: ${name} | PRICE: $${salePrice}`;
  li.addEventListener('click', cartItemClickListener);
  return li;
};

const createCartItems = document.querySelector('.cart__items');
const createItems = (items) => {
  fetchItem(items)
  .then((element) => createCartItems.appendChild(createCartItemElement(element)));
};

document.addEventListener('click', (event) => {
  if (event.target.classList.contains('item__add')) {
    const element = event.target.parentNode.firstChild.innerText;
    createItems(element);
  }
});

window.onload = () => { 
  products();
};
