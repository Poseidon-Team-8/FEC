import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Overview from './components/overview/overview.jsx';
import Ratings from './components/ratings/ratings.jsx';
import Questions from './components/questions/questions.jsx';
import api from './api.js';

function App() {
  const {getProduct} = api;
  const productId = 17074;
  const [product, setProduct] = useState();

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
  const ModuleIDs = ['ProductInfo', 'StyleSelector', 'Cart', 'ImageGallery']

  const clickTracker = (e) => {
    const timestamp = Date.now()
    console.log(timestamp)
    console.log(e)
    console.log(FindModule(e))
  }

  if (!product) {
    return null
  }
  return (
    <div onClick={(e) => clickTracker(e.target)}>
      <h1>TEAM POSEIDON</h1>
      <Overview productId={productId} product={product} />
      <Questions productId={productId} name={product.name} />
      <Ratings productId={productId} name={product.name}/>
    </div>
  )
}

export default App;

ReactDOM.render(<App />, document.getElementById('app'));