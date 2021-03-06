import React, { useState } from 'react';

function Cart(props) {
  let skus = props.styles[props.styleIndex].skus;
  return (
    <div id="Cart" className="cart">
      {Size(skus, props.updateSKU)}
      {Quantity(skus, props.sku, props.updateQuantity)}
      <button id="cart" onClick={() => props.updateCart()}>Add to Bag</button>
    </div>
  )
}

function Size(skus, updateSKU) {
  return (
    <div className="size-dropdown">
      <select name="sizes" id="size-select" onChange={(e) => updateSKU(e.target.value)}>
        <option value="">Select Size</option>
        {Object.keys(skus).map((key, index) => {
          let stock = skus[key];
          if (stock.quantity > 0) {
            return <option key={index} value={key}>{stock.size}</option>
          }
        })}
      </select>
    </div>
  )
}

function Quantity(skus, sku, updateQuantity) {
  if (sku === 0) {
    return (
      <select id="quantity-select">
        <option>-</option>
      </select>
    )
  }
  return (
    <div className="quantity-dropdown">
      <select name="quantity" id="quantity-select" onChange={(e) => updateQuantity(e.target.value)}>
        {createQuantity(skus[sku].quantity).map((num, index) => <option key={index} value={num}>{num}</option>)}
      </select>
    </div>
  )
}

function createQuantity(quantity) {
  let arr = [];
  let total = quantity
  if (total > 15) {
    total = 15
  }
  for (var i = 1; i <= total; i++) {
    arr.push(i);
  }
  return arr;
}

export default Cart;