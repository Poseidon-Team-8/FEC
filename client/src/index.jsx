import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Overview from './components/overview/overview.jsx';
import Ratings from './components/ratings/ratings.jsx';
import Questions from './components/questions/questions.jsx';
import api from './api.js';

function App() {
  const {getProduct} = api;
  const productId = 17122;

  const [product, setProduct] = useState();
  const [clicks, setClicks] = useState({'NoModule': {}});
  // // uncomment if console logging click data
  const [clickCounter, setClickCounter] = useState(0);

  useEffect(async () => {
    let res = await getProduct(productId);
    setProduct(res.data);
  }, [])

  // recursively searches for nearest parent module
  const FindModule = (tag) => {
    if (ModuleIDs.includes(tag.id)) {
      return tag.id
    }
    if (tag.parentNode) {
      return FindModule(tag.parentNode)
    }
    return null
  }

  // add id to top div of each distinct module, then add to array
  const ModuleIDs = ['ProductInfo',
                     'StyleSelector',
                     'Cart',
                     'ImageGallery',
                     'ReviewList',
                     'ReviewListButtons',
                     'ReviewListSortDropdown',
                     'RatingBreakdown',
                     'ProductBreakdown'
                    ]

  const clickTracker = (e) => {
    const options = {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric'
    }
    let timestamp = new Date();
    timestamp = timestamp.toLocaleDateString("en-US", options);
    const module = FindModule(e);
    if (ModuleIDs.includes(module)) {
      if (!clicks[module]) {
        clicks[module] = {};
      }
      clicks[module][timestamp] = e;
    } else {
      clicks['NoModule'][timestamp] = e;
    }
    setClicks({...clicks});

    //// uncomment to console log every 10th click
    setClickCounter(clickCounter + 1);
    if (clickCounter % 10 === 0) {
      console.log(clicks)
    }

    /* Structure of click tracking data
    clicks = {
      module1: {
        timestamp: tag,
        timestamp: tag
      }
      module2: {
        timestamp: tag
      }
    }
    */
  }

  if (!product) {
    return null
  }
  return (
    <div onClick={(e) => clickTracker(e.target)} className="app">
      <Overview productId={productId} product={product} />
      <Questions productId={productId} productName={product.name} />
      <Ratings productId={productId} name={product.name}/>
    </div>
  )
}

export default App;

ReactDOM.render(<App />, document.getElementById('app'));