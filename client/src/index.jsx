import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Overview from './components/overview/overview.jsx';
import Ratings from './components/ratings/ratings.jsx';
import Questions from './components/questions/questions.jsx';

function App() {
  const productId = 17074;
  const [product, setProduct] = useState()

  useEffect(() => {
    axios.get('/productInfo', {
      headers: {id: productId}
    })
    .then(res => {
      setProduct(res.data)
    })
  }, [])

  if (!product) {
    return null
  }
  return (
    <div>
      <h1>Working</h1>
      <Overview productId={productId} product={product} />
      <Questions productId={productId} name={product.name} />
      <Ratings productId={productId} name={product.name}/>
    </div>
  )
}

export default App;

ReactDOM.render(<App />, document.getElementById('app'));