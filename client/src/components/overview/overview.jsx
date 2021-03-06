import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProductInfo from './productInfo.jsx';
import StyleSelector from './styleSelector.jsx';
import Cart from './cart.jsx';
import Default from './imageDefault.jsx';
import api from '../../api.js';
import mockData from '../../../../mockData.js';

function Overview(props) {
  let imageObject = {}
  for (var i = 0; i < 20; i++) {
    imageObject[i] = 0
  }
  const {getStyles} = api;
  const {mockStyles} = mockData;
  const [styles, setStyles] = useState(mockStyles);
  const [styleIndex, setStyleIndex] = useState(0);
  const [sku, setSKU] = useState(0);
  const [quantity, setQuantity] = useState(0);
  const [modal, setModal] = useState(false);
  const [zoom, setZoom] = useState(false);
  const [image, setImage] = useState(imageObject)

  useEffect(async () => {
    let res = await getStyles(props.productId)
    setStyles(res.data)
  }, []);

  const updateStyle = (index) => {
    setStyleIndex(index);
    setSKU(0);
    setQuantity(0);
  }

  const toggleModal = () => {
    setModal(!modal)
  }

  const toggleZoom = () => {
    setZoom(!zoom)
  }

  const updateSKU = (key) => {
    setSKU(key);
    setQuantity(1);
  }

  const updateQuantity = (quantity) => {
    setQuantity(quantity)
  }

  const updateImage = (key, index) => {
    image[key] = index;
    setImage({...image});
  }

  const updateCart = () => {
    if (!quantity || !sku) {
      return null
    }
    axios.post('/updateCart', {
      sku: sku,
      quantity: quantity
    })
      .then(res => {
        alert(`${quantity} ${styles[styleIndex].name} ${props.product.title} added to cart`);
        // have to update not only the state but the display
        setSKU(0);
        setQuantity(0);
      })
      .catch(err => {
        alert('Error updating cart, please try again')
        console.log('ERROR', err);
      })
  }

  return (
    <div>
      <ProductInfo
        product={props.product}
        styles={styles}
        styleIndex={styleIndex} >
        <Default
          image={image}
          updateImage={(key, index) => updateImage(key, index)}
          styles={styles}
          styleIndex={styleIndex}
          modal={modal}
          toggleModal={() => toggleModal()}
          zoom={zoom}
          toggleZoom={() => toggleZoom()}>
          <StyleSelector
            styles={styles}
            styleIndex={styleIndex}
            setStyleIndex={setStyleIndex}
            updateStyle={(index) => updateStyle(index)}>
            <Cart
              styles={styles}
              updateCart={() => updateCart()}
              styleIndex={styleIndex}
              updateSKU={(key) => updateSKU(key)}
              sku={sku}
              updateQuantity={(quantity) => updateQuantity(quantity)}/>
          </StyleSelector>
        </Default>
      </ProductInfo>
    </div>
  )
}

export default Overview;