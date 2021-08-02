import axios from 'axios';

const getProduct = (productId) => {
  return axios.get('/productInfo', {
    headers: {id: productId}
  })
  .then(res => {
    return res.data
  })
}

export default {getProduct}