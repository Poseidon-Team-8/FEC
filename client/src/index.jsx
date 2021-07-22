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
      productId: 17071
    }
  }

  // getProducts() {
  //   axios.get('/asdf')
  //     .then( (res) => {
  //       console.log(res.data);
  //     });
  // }

  // componentDidMount() {
  //   this.getProducts();
  // }

  render() {
    return (
      <div>
        <h1>Working</h1>
        <Overview productId={ this.state.productId} />
        <Questions productId={ this.state.productId } />
        <Ratings productId={ this.state.productId} />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));