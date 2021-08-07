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

const getMetaData = (productId) => {
  return axios.get('/meta', {
    headers: {id: productId}
  })
  .catch(err => {
    console.log(err)
  })
}

export default {getProduct, getStyles, getMetaData}


/*

- Call getMetaData in index.jsx and use context to pass result
- Eliminates need for ratings.jsx to have a meta/setMetaData hook, instead calling the api function and running lines 41-42 alone
- ratings.jsx can still use results for getReviews
- productInfo.jsx can now use meta.ratings and lines 9-15 of RatingBreakdown to pass ratingAvg into StarRating

*/