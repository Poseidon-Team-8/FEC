import axios from 'axios';

const getProduct = (productId) => {
  axios.get('/productInfo', {
    headers: {id: productId}
  })
  .then(res => {
    return res.data
  })
  .catch(err => {
    console.log(err)
  })
}

export default {getProduct}