import React, { useState, useEffect } from 'react';
import axios from 'axios';
import StarRating from '../ratings/StarRating.jsx';
import ratingAvg from '../ratings/RatingBreakdown.jsx'

function ProductInfo(props) {

  const [product, setProduct] = useState();

  useEffect(() => {
    axios.get('/productInfo', {
      headers: {
        id: props.productId
      }
    })
    .then(res => {
      setProduct({
          title: res.data.name,
          category: res.data.category,
          overview: res.data.description
        })
      })
  }, [])

  if (props.styles.length === 0) {
    return (
      <p>Loading Product Info</p>
      )
  }

  const prices = props.styles[props.currentStyle];
  let priceInfo = `Price: ${prices.original_price}`
  return (
    <div>
      <h2>{product.title}</h2>
      <StarRating ratingAvg={ ratingAvg }/>
      <p>Category: {product.category} > Price:
      {prices.sale_price ? <span> <span className="ogprice">${prices.original_price}</span> <span className="salePrice">{prices.sale_price}</span> </span> : <span> ${prices.original_price}</span>}
      </p>
      {Share()}
      {props.children}
      <p>{product.overview}</p>
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

      <a href="https://twitter.com/share?ref_src=twsrc%5Etfw" data-show-count="false"><img className="social" src="./icons/2021 Twitter logo - blue.png"></img></a><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

      <a className="social" href="https://www.pinterest.com/pin/create/button/" data-pin-do="buttonBookmark"><img className="social" src="./icons/pinterest.png"></img>
    </a>
    </div>
  )
}

export default ProductInfo;