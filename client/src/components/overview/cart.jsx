import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

// styles[index] -> object that has property skus
// styles[index].skus -> object with many keys
// styles[index].skus[some_key] -> object that has properties "size" and "quantity"


function Cart(props) {
  function createQuantity(quantity) {
    let total = [];
    for (var i = 1; i <= quantity; i++) {
      total.push(i);
    }
    return total;
  }
  if (props.currentStyle === -1) {
    return(
      <p>idk, filler content for a non-existant dropdown</p>
      )
    } else {
    return (
      <div>
      --- cart start ---
      <div id="size-dropdown">
        <select name="sizes" id="size-select" onChange={(e) => props.updateSKU(e.target.value)}>
            <option value="">Select Size</option>
            {Object.keys(props.styles[props.currentStyle].skus).map(key => {
              let stock = props.styles[props.currentStyle].skus[key];
              if (stock.quantity > 0) {
                return <option value={key}>{stock.size}</option>
                // adjust onClick to only update if selection is different, otherwise we don't want to disrupt quantity?
              }
            })}
        </select>
      </div>
      <div id="quantity-dropdown">
        <select name="quantity" id="quantity-select" onChange={(e) => props.updateQuantity(e.target.value)}>
          <option value="">-</option>
          {props.currentSKU === -1 ? null :
          createQuantity(props.styles[props.currentStyle].skus[props.currentSKU].quantity).map(num => <option value={num}>{num}</option>)}
        </select>
      </div>
      --- cart end ---
      <button>should make API call to submit sku, quantity number of times</button>

    </div>
    )
  }
}

export default Cart;