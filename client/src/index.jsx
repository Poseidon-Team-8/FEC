import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Overview from './components/overview/overview.jsx';
import Ratings from './components/ratings/ratings.jsx';
import Questions from './components/questions/questions.jsx';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      productId: 17071,
      product: null
    }
  }

  componentDidMount() {
    axios.get('/productInfo', {
      headers: {id: this.state.productId}
    })
    .then(res => {
      this.setState({product: res.data})
    })
  }

  render() {
    if (!this.state.product) {
      return null
    }
    return (
      <div>
        <h1>Working</h1>
        <Overview productId={ this.state.productId } product={this.state.product} />
        <Questions productId={ this.state.productId } name={this.state.product.name} />
        <Ratings productId={ this.state.productId} name={this.state.product.name}/>
      </div>
    )
  }
}

export default App;

ReactDOM.render(<App />, document.getElementById('app'));