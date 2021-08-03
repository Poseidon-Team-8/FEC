import axios from 'axios';

const getProduct = (productId) => {
  return axios.get('/productInfo', {
    headers: {id: productId}
  })
  .catch(err => {
    console.log(err)
  })
}

const getStyles = (productId) => {
  return axios.get('/styles', {
      headers: {id: productId}
    })
    .catch(err => {
      console.log(err)
    })
}

export default {getProduct, getStyles}