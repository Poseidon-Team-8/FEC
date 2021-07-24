import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import ProductInfo from './productInfo.jsx'
import StyleSelector from './styleSelector.jsx'
import Cart from './cart.jsx'

class Overview extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      productInfo: {
        title: 'Loading',
        category: 'Loading',
        price: 'Loading',
        overview: 'Loading'
      },
      styles: [],
      currentStyle: -1,
      sku: -1,
      quantity: -1
    }
  }

  getProducts() {
    axios.get('/productInfo', {
      headers: {
        id: this.props.productId
      }
    })
      .then(res => {
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

  getStyles() {
    axios.get('/styles', {
      headers: {
        id: this.props.productId
      }
    })
      .then(res => {
        this.setState({
          styles: res.data
        })
      })
  }

  updateQuantity = (quantity) => {
    this.setState({quantity})
  }

  updateStyle = (index) => {
    this.setState({currentStyle: index})
  }

  updateSKU = (key) => {
    this.setState({sku: key})
  }

  componentDidMount() {
    this.getProducts();
    this.getStyles();
  }

  render() {
    return (
      <div>
        <h2>Overview</h2>
        <ProductInfo info={this.state.productInfo}>
          <StyleSelector
            styles={this.state.styles}
            currentStyle={this.state.currentStyle}
            updateStyle={(index) => this.updateStyle(index)}/>
          <Cart
          styles={this.state.styles}
          currentStyle={this.state.currentStyle}
          updateSKU={(key) => this.updateSKU(key)}
          currentSKU={this.state.sku}
          updateQuantity={(quantity) => this.updateQuantity(quantity)}
          />
        </ProductInfo>
      </div>
    )
  }
}

export default Overview;