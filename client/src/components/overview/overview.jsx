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
    let image = {}
    for (var i = 0; i < 20; i++) {
      image[i] = 0
    }
    this.state = {
      productInfo: {
        title: 'Loading',
        category: 'Loading',
        overview: 'Loading'
      },
      styles: [],
      currentStyle: 0,
      sku: 0,
      quantity: 0,
      image: image
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

  updateImage = (key, index) => {
    this.setState(prevState => {
      let image = Object.assign({}, prevState.image);
      image[key] = index;
      return { image };
    })
  }

  updateSKU = (key) => {
    this.setState({
      sku: key,
      quantity: 1
    })
  }

  updateQuantity = (quantity) => {
    this.setState({quantity})
  }

  updateCart = () => {
    let total = this.state.quantity;
    let flag = true;
    if (this.state.sku === 0) {
      // open Size dropdown
    }
    for (var i = 0; i < total; i++) {
      axios.post('/updateCart', {
        sku: this.state.sku
      })
        .then(res => {
          console.log('Successfully added item')
        })
        .catch(err => {
          flag = false;
          alert('Error updating cart, please try again')
          console.log('ERROR', err);
        })
    }
    if (flag && total !== 0) {
      alert(`${this.state.quantity} ${this.state.styles[this.state.currentStyle].name} ${this.state.productInfo.title} added to cart`);
      this.setState({
        sku: 0,
        quantity: 0
      })
    }
  }

  componentDidMount() {
    this.getProducts();
    this.getStyles();
  }

  render() {
    // if (this.styles.length === 0) {
    //   return (
    //     <h1>Loading Product Detail</h1>
    //   )
    // }
    return (
      <div>
        <ProductInfo
          info={this.state.productInfo}
          styles={this.state.styles}
          currentStyle={this.state.currentStyle}
        >
          <Default
            image={this.state.image}
            updateImage={(key, index) => this.updateImage(key, index)}
            styles={this.state.styles}
            currentStyle={this.state.currentStyle}
          ></Default>
            <StyleSelector
              styles={this.state.styles}
              currentStyle={this.state.currentStyle}
              updateStyle={(index) => this.updateStyle(index)}
            >
              <Cart
                styles={this.state.styles}
                updateCart={() => this.updateCart()}
                currentStyle={this.state.currentStyle}
                updateSKU={(key) => this.updateSKU(key)}
                sku={this.state.sku}
                updateQuantity={(quantity) => this.updateQuantity(quantity)}
                />
            </StyleSelector>
        </ProductInfo>
      </div>
    )
  }
}

export default Overview;