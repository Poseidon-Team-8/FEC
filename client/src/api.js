import axios from 'axios';

const getProduct = (productId) => {
  return axios.get('/productInfo', {
    headers: {id: productId}
  })
  .then(res => {
    return res.data
  })
}

const getStyles = (productId) => {
  return axios.get('/styles', {
      headers: {id: productId}
    })
}

export default {getProduct, getStyles}