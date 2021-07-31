import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProductInfo from './productInfo.jsx';
import StyleSelector from './styleSelector.jsx';
// import Cart from './cart.jsx';
// import Default from './imageDefault.jsx';

function Overview(props) {

  let image = {}
  for (var i = 0; i < 20; i++) {
    image[i] = 0
  }
  // this.state = {
  //   currentStyle: 0,
  //   sku: 0,
  //   quantity: 0,
  //   modal: false,
  //   zoom: false,
  //   image: image
  // }

  const [styles, setStyles] = useState([]);
  const [styleIndex, setStyleIndex] = useState(0);


  // getStyles = () => {
  //   axios.get('/styles', {
  //     headers: {id: props.productId}
  //   })
  //   .then(res => {
  //     setStyles({styles: res.data})
  //   })
  // }

  useEffect(() => {
    axios.get('/styles', {
      headers: {id: props.productId}
    })
    .then(res => {
      setStyles(res.data)
    })
  }, [])
  // toggleModal = () => {
  //   this.setState({ modal: !this.state.modal })
  // }

  // toggleZoom = () => {
  //   this.setState({ zoom: !this.state.zoom })
  // }

  // updateStyle = (index) => {
  //   this.setState({
  //     currentStyle: index,
  //     sku: 0,
  //     quantity: 0
  //   })
  // }

  // updateImage = (key, index) => {
  //   this.setState(prevState => {
  //     let image = Object.assign({}, prevState.image);
  //     image[key] = index;
  //     return { image };
  //   })
  // }

  // updateSKU = (key) => {
  //   this.setState({
  //     sku: key,
  //     quantity: 1
  //   })
  // }

  // updateQuantity = (quantity) => {
  //   this.setState({quantity})
  // }

  // updateCart = () => {
  //   let total = this.state.quantity;
  //   let flag = true;
  //   if (this.state.sku === 0) {
  //     // open Size dropdown
  //   }
  //   for (var i = 0; i < total; i++) {
  //     axios.post('/updateCart', {
  //       sku: this.state.sku
  //     })
  //       .then(res => {
  //         console.log('Successfully added item')
  //       })
  //       .catch(err => {
  //         flag = false;
  //         alert('Error updating cart, please try again')
  //         console.log('ERROR', err);
  //       })
  //   }
  //   if (flag && total !== 0) {
  //     alert(`${this.state.quantity} ${this.state.styles[this.state.currentStyle].name} ${this.state.productInfo.title} added to cart`);
  //     this.setState({
  //       sku: 0,
  //       quantity: 0
  //     })
  //   }
  // }

    return (
      <div>
        <ProductInfo
          productId={props.productId}
          styles={styles}
          styleIndex={styleIndex}
        >
          {/* <Default
            image={this.state.image}
            updateImage={(key, index) => this.updateImage(key, index)}
            styles={this.state.styles}
            currentStyle={this.state.currentStyle}
            modal={this.state.modal}
            toggleModal={() => this.toggleModal()}
            zoom={this.state.zoom}
            toggleZoom={() => this.toggleZoom()}
          > */}

            <StyleSelector
              styles={styles}
              styleIndex={styleIndex}
              setStyleIndex={setStyleIndex}
              >
              {/* <Cart
                styles={this.state.styles}
                updateCart={() => this.updateCart()}
                currentStyle={this.state.currentStyle}
                updateSKU={(key) => this.updateSKU(key)}
                sku={this.state.sku}
                updateQuantity={(quantity) => this.updateQuantity(quantity)}
                /> */}
            </StyleSelector>
                {/* </Default> */}
        </ProductInfo>
      </div>
    )
}

export default Overview;