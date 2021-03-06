import React, { useEffect, useState, Suspense } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Overview from './components/overview/overview.jsx';
const Ratings = React.lazy(() => import('./components/ratings/ratings.jsx'));
const Questions = React.lazy(() => import('./components/questions/questions.jsx'));
import api from './api.js';
import mockData from '../../mockData.js';

const RatingsContext = React.createContext()

function App() {
  const {getProduct, getMetaData} = api;
  const {mockProduct, mockMeta} = mockData;
  const productId = 17071;
  const [product, setProduct] = useState(mockProduct);
  const [meta, setMeta] = useState(mockMeta);
  const [clicks, setClicks] = useState({'NoModule': {}});
  //// uncomment if console logging click data
  const [clickCounter, setClickCounter] = useState(0);

  useEffect(async () => {
    let res1 = await getProduct(productId);
    setProduct(res1.data);
    let res2 = await getMetaData(productId);
    setMeta(res2.data);
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
                     'ProductBreakdown',
                     'answers',
                     'individual-question',
                     'add-answer',
                     'report',
                     'search',
                     'helpful-question',
                     'add-question'
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

  return (
    <div onClick={(e) => clickTracker(e.target)} className="app">
      <RatingsContext.Provider value={meta}>
        <Overview productId={productId} product={product} />
      </RatingsContext.Provider>
      <Suspense fallback={<div>Loading...</div>}>
        <Questions productId={productId} productName={product.name} />
        <Ratings productId={productId} name={product.name} meta={meta}/>
      </Suspense>
    </div>
  )
}

export default RatingsContext

ReactDOM.render(<App />, document.getElementById('app'));