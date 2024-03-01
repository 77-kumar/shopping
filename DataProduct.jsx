import React, { useContext } from 'react';
import './Shop.css';
import { ShopContext } from './Contex/ShopContext';

const DataProduct = (props) => {
  const { id, ProductName, ProductImage, Price } = props.data;
  const { addToCart, cartItems } = useContext(ShopContext);

  const cardItemsAmount = cartItems[id];

  return (
    <div className="data-product">
      <img className="product-image" src={ProductImage} alt={ProductName} />
      <div className="product-name">{ProductName}</div>
      <div className="product-price">${Price}</div>
      <button className="AddToCartBtt" onClick={() => addToCart(id)}>
        Add Cart {cardItemsAmount > 0 && `(${cardItemsAmount})`}
      </button>
    </div>
  );
};

export default DataProduct;
