import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Overview from './components/overview/overview.jsx';
import Ratings from './components/ratings/ratings.jsx';
import Questions from './components/questions/questions.jsx';
import api from './api.js';

function App() {
  const productId = 17074;
  const {getProduct} = api;
  const [product, setProduct] = useState(null);

  useEffect(() => {
    setProduct(getProduct(productId))
  }, [])

  if (!product) {
    return null
  }
  return (
    <div>
      <h1>TEAM POSEIDON</h1>
      <Overview productId={productId} product={product} />
      <Questions productId={productId} name={product.name} />
      <Ratings productId={productId} name={product.name}/>
    </div>
  )
}

export default App;

ReactDOM.render(<App />, document.getElementById('app'));