const express = require('express');
const app = express();
const path = require('path');
const port = 3000;
const axios = require('axios');
const auth = require('../config.js');

app.use(express.json());
app.use(express.static(path.join(__dirname, '..', '/client/dist')));

//Get Request Template
app.get('/clientEndpoint', (req, res) => {
  axios({
    method: 'get',
    url: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/products',
    headers: {
      'Authorization': `${auth.TOKEN}`
    }
  })
    .then(response => {
      res.send(response.data)
    })
})

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