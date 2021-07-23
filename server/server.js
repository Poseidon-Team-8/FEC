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

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})