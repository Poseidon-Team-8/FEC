import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

class ProductInfo extends React.Component {

  constructor(props) {
    super(props);
    // this.state = {
    // }
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
        <h2>{this.props.info.title}</h2>
        <p>{this.props.info.category}</p>
        <p>{this.props.info.price}</p>
        <p>{this.props.info.overview}</p>
      </div>
    );
  }
}

export default ProductInfo;