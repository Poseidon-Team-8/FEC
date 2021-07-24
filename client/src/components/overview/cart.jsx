import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

// styles[index] -> object that has property skus
// styles[index].skus -> object with many keys
// styles[index].skus[some_key] -> object that has properties "size" and "quantity"

function Cart(props) {
  if (props.currentStyle === -1) {
    return(
      <p>idk, filler content for a non-existant dropdown</p>
      )
    } else {
    return (
      <div>
      --- cart start ---
      <div id="size-dropdown">
      {/* <label for="size-select">Choose a pet:</label> */}
        <select name="sizes" id="size-select">
            <option value="">Select Size</option>
            {Object.keys(props.styles[props.currentStyle].skus).map(key => {
              let stock = props.styles[props.currentStyle].skus[key];
              if (stock.quantity > 0) {
                return <option>{stock.size}</option> // add onClick to update selectedSize
              }
            })}
        </select>
      </div>
      --- cart end ---
    </div>
    )
  }
}

export default Cart;