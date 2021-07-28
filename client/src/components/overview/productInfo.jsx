import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

function ProductInfo(props) {
  return (
    <div>
      <h2>{props.info.title}</h2>
      <p>Category: {props.info.category} > Price: ${props.info.price}</p>
      {props.children}
      <p>{props.info.overview}</p>
    </div>
  );
}

export default ProductInfo;