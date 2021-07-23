import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
// import StyleSelector from './styleSelector.jsx';

function ProductInfo(props) {
  return (
    <div>
      --- product info start ---
      <h2>{props.info.title}</h2>
      <p>{props.info.category}</p>
      <p>{props.info.price}</p>
      {props.children}
      <p>{props.info.overview}</p>
      --- product info end ---
    </div>
  );
}

export default ProductInfo;