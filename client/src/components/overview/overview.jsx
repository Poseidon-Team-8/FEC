import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import ProductInfo from './productInfo.jsx'

class Overview extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      productInfo: {
        title: 'Loading',
        category: 'Loading',
        price: 'Loading',
        overview: 'Loading'
      }
    }
  }

  getProducts() {
    axios.get('/productInfo', {
      headers: {
        id: this.props.productId
      }
    })
      .then( (res) => {
        this.setState({
          productInfo: {
            title: res.data.name,
            category: res.data.category,
            price: res.data.default_price,
            overview: res.data.description
          }
        })
      });
  }

  componentDidMount() {
    this.getProducts();
  }

  render() {
    return (
      <div>
        <h2>Overview</h2>
        <ProductInfo info={this.state.productInfo} />
      </div>
    )
  }
}

export default Overview;