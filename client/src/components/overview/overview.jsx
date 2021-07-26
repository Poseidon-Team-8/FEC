import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import ProductInfo from './productInfo.jsx';
import StyleSelector from './styleSelector.jsx';
import Cart from './cart.jsx';
import Default from './imageDefault.jsx';

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
      currentStyle: 0,
      sku: 0,
      quantity: 0
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

  updateStyle = (index) => {
    this.setState({
      currentStyle: index,
      sku: 0,
      quantity: 0
    })
  }

  updateSKU = (key) => {
    this.setState({sku: key})
  }

  updateQuantity = (quantity) => {
    this.setState({quantity})
  }

  updateCart = () => {
    let total = this.state.quantity;
    for (var i = 0; i < total; i++) {
      axios.post('/updateCart', {
        sku: this.state.sku
      })
        .then(res => {
          console.log(res.data)
        })
        .catch(err => {
          console.log('ERROR', err);
        })
    }
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
          <Default
            styles={this.state.styles}
            currentStyle={this.state.currentStyle}/>
          <StyleSelector
            styles={this.state.styles}
            currentStyle={this.state.currentStyle}
            updateStyle={(index) => this.updateStyle(index)}/>
          <Cart
          styles={this.state.styles}
          updateCart={() => this.updateCart()}
          currentStyle={this.state.currentStyle}
          updateSKU={(key) => this.updateSKU(key)}
          sku={this.state.sku}
          updateQuantity={(quantity) => this.updateQuantity(quantity)}
          />
        </ProductInfo>
        --- END OF OVERVIEW ---
      </div>
    )
  }
}

export default Overview;