const cartItems = document.querySelector('.cart__items');
const product = document.querySelector('.items');
const emptyCart = document.querySelector('.empty-cart');

const cleanCart = () => {
  cartItems.innerHTML = '';
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
  const section = document.createElement('section');
  section.className = 'item';
  section.appendChild(createCustomElement('span', 'item__sku', sku));
  section.appendChild(createCustomElement('span', 'item__title', name));
  section.appendChild(createProductImageElement(image));
  section.appendChild(createCustomElement('button', 'item__add', 'Adicionar ao carrinho!'));
  return section;
};

const products = () => {
  fetchProducts('computador').then((item) => item.results
  .forEach((items) => product.appendChild(createProductItemElement(items))));
};

const getSkuFromProductItem = (item) => item.querySelector('span.item__sku').innerText;

const cartItemClickListener = (event) => {
  event.target.remove();
  saveCartItems(cartItems.innerHTML);
};

const createCartItemElement = ({ id: sku, title: name, price: salePrice }) => {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = `SKU: ${sku} | NAME: ${name} | PRICE: $${salePrice}`;
  li.addEventListener('click', cartItemClickListener);
  return li;
};

const createItems = (items) => {
  fetchItem(items).then((element) => {
    cartItems.appendChild(createCartItemElement(element));
    const createCartItems = document.querySelector('.cart__items');
    saveCartItems(createCartItems.innerHTML);
});
};

document.addEventListener('click', (event) => {
  if (event.target.classList.contains('item__add')) {
    const element = event.target.parentNode.firstChild.innerHTML;
    createItems(element);
  }
});

const getLocal = () => {
  const items = getSavedCartItems();
  cartItems.innerHTML = items;
};
cartItems.addEventListener('click', cartItemClickListener);

window.onload = () => { 
  products();
  getLocal();
  };
