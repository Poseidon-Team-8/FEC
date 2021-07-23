import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

// index > overview > productInfo > cart

// locate sizes in API
// styles -> array in overview state
// styles[index].skus -> object of skus each with object of quantity and size

class Cart extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        --- cart start ---
        {/* <div id="size-dropdown">
        <label for="size-select">Choose a pet:</label>
          <select name="sizes" id="size-select">
              <option value="">Select Size</option>
              <option value="dog">Dog</option>
          </select>


        </div> */}
        --- cart end ---
      </div>
    )
  }
}

export default Cart;