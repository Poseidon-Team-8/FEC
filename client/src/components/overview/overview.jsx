import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

class Overview extends React.Component {

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
        <h2>Overview</h2>
      </div>
    )
  }
}

export default Overview;