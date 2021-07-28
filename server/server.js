const express = require('express');
const app = express();
const path = require('path');
const port = 3000;
const axios = require('axios');
const auth = require('../config.js');

app.use(express.json());
app.use(express.static(path.join(__dirname, '..', '/client/dist')));

app.get('/productQuestions', (req, res) => {
  axios({
    method: 'get',
    url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/qa/questions/?product_id=${req.headers.id}`,
    headers: {
      Authorization: `${auth.TOKEN}`
    }
  })
  .then(response => {
    res.send(response.data);
  })
})

// get product info
app.get('/productInfo', (req, res) => {
  axios({
    method: 'get',
    url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/products/${req.headers.id}`,
    headers: {
      'Authorization': `${auth.TOKEN}`
    }
  })
    .then(response => {
      res.send(response.data)
    })
})

// get styles
app.get('/styles', (req, res) => {
  axios({
    method: 'get',
    url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/products/${req.headers.id}/styles`,
    headers: {
      'Authorization': `${auth.TOKEN}`
    }
  })
    .then(response => {
      res.send(response.data.results)
    })
})

/*
========================================================
                  RATINGS & REVIEWS
========================================================
*/

app.get('/reviews', (req, res) => {
  let options = {
    headers: {
      'Authorization': `${auth.TOKEN}`
    }
  }

  if (req.headers.reqtype === 'general') {
    options.url = `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/reviews/?product_id=${req.headers.id}`;
  } else {
    options.url = `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/reviews/meta/?product_id=${req.headers.id}`;
  }
  axios(options)
    .then( (response) => {
      res.send(response.data);
    })
    .catch( (err) => {
      res.send(err);
    })
})

app.put('/review-helpful', (req, res) => {
  let options = {
    method: 'put',
    url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/reviews/${req.headers['review-id']}/helpful`,
    headers: {
      'Authorization': `${auth.TOKEN}`
    }
  }

  axios(options)
    .then( response => {
      console.log('put worked!')
      res.send(response.data);
    })
    .catch( err => {
      res.send(err);
    })

})

app.post('/updateCart', (req, res) => {
  let sku = parseInt(req.body.sku)
  axios({
    method: 'post',
    url: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/cart',
    headers: {
      'Authorization': `${auth.TOKEN}`
    },
    data: {
      sku_id: sku
    }
  })
    .then(response => {
      res.send(response.data)
    })
    .catch(err => {
      console.log(err)
      res.send(err)
    })
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})