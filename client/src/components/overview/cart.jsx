import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

function Cart(props) {
  if (props.styles.length === 0) {
    return(<p>loading cart</p>)
  } else {
    let skus = props.styles[props.currentStyle].skus;
    return (
      <div>
        {Size(skus, props.updateSKU)}
        {Quantity(skus, props.sku, props.updateQuantity)}
        <button onClick={() => props.updateCart()}>Add to Bag</button>
      </div>
    )
  }
}

function Size(skus, updateSKU) {
  return (
    <div id="size-dropdown">
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
      <select>
        <option>-</option>
      </select>
    )
  } else {
    return (
      <div id="quantity-dropdown">
        <select name="quantity" id="quantity-select" onChange={(e) => updateQuantity(e.target.value)}>
          <option value="">-</option>
          {createQuantity(skus[sku].quantity).map((num, index) => <option key={index} value={num}>{num}</option>)}
        </select>
      </div>
    )
  }
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