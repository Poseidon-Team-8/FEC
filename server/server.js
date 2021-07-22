const express = require('express')
const app = express()
const path = require('path');
const port = 3000
const token = require('../config.js')

app.use(express.json());
app.use(express.static(path.join(__dirname, '..', '/client/dist')));

app.get('/asdf', (req, res) => {
  res.send('Hello from server')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})