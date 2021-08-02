import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Overview from './components/overview/overview.jsx';
import Ratings from './components/ratings/ratings.jsx';
import Questions from './components/questions/questions.jsx';
import api from './api.js';

const {getProduct} = api;

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      productId: 17071
    }
  }

  componentDidMount() {
    const product = getProduct(this.state.productID)
  }

  render() {
    return (
      <div>
        <h1>Working</h1>
        <Overview productId={ this.state.productId} product={product} />
        <Questions productId={ this.state.productId } name={product.name} />
        <Ratings productId={ this.state.productId} name={product.name}/>
      </div>
    )
  }
}

export default App;

ReactDOM.render(<App />, document.getElementById('app'));