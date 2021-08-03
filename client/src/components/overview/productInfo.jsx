import React, { useState, useEffect } from 'react';

function ProductInfo(props) {
  if (!props.product || !props.styles.length) {
    debugger;
    return null
  }

  const prices = props.styles[props.styleIndex];
  const priceInfo = `Price: ${prices.original_price}`

  return (
    <div>
      <h2>{props.product.name}</h2>
      {/* <StarRating ratingAvg={ ratingAvg }/> */}
      <p>Category: {props.product.category} > Price:
      {prices.sale_price ? <span> <span className="ogprice">${prices.original_price}</span> <span className="salePrice">{prices.sale_price}</span> </span> : <span> ${prices.original_price}</span>}
      </p>
      {Share()}
      {props.children}
      <p>{props.product.description}</p>
    </div>
  );
}

function Share() {
  return (
    <div>
      <div className="social" data-href="http://localhost:3000/" data-layout="button" data-size="small"><a target="_blank"
      // href="https://www.facebook.com/sharer/sharer.php?u=http%3A%2F%2Flocalhost%3A3000%2F&amp;src=sdkpreparse"
      href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
      ><img className="social" src="./icons/f_logo_RGB-Blue_1024.png"></img></a></div>

      <a href="https://twitter.com/share?ref_src=twsrc%5Etfw" data-show-count="false"><img className="social" src="./icons/2021 Twitter logo - blue.png"></img></a><script async src="https://platform.twitter.com/widgets.js" charSet="utf-8"></script>

      <a className="social" href="https://www.pinterest.com/pin/create/button/" data-pin-do="buttonBookmark"><img className="social" src="./icons/pinterest.png"></img>
    </a>
    </div>
  )
}

export default ProductInfo;