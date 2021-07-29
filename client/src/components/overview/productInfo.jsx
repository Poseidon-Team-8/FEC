import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

function ProductInfo(props) {

  if (props.styles.length === 0) {
    return (
      <p>Loading Product Info</p>
      )
  }

  const prices = props.styles[props.currentStyle];
  let priceInfo = `Price: ${prices.original_price}`
  return (
    <div>
      <h2>{props.info.title}</h2>
      <p>Category: {props.info.category} > Price:
      {prices.sale_price ? <span> <span className="ogprice">${prices.original_price}</span> <span className="salePrice">{prices.sale_price}</span> </span> : <span> ${prices.original_price}</span>}
      </p>
      {props.children}
      <p>{props.info.overview}</p>
    </div>
  );
}

export default ProductInfo;

// price derived from style, strikethrough normal price if sale price (in red) exists