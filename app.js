const express = require('express')
const app = express()
// const http = require('http').Server(app)
const path = require('path')
const fetch = require('node-fetch')
const PORT = 8000
const render = require('./public/javascripts/renderData.js');

app.use(express.static('public'))

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, './public/index.html'))
})

app.get('/fighters', (req, res) => {
  fetch('http://ufc-data-api.ufc.com//api/v1/us/fighters')
  .then((response) => {
      return response.text();
  }).then((body) => {
      let results = JSON.parse(body)
      res.json(results)
      return render(results);
    });
});

app.listen(PORT, () => {
  console.log(__dirname);
  console.log(`listening on ${PORT}`)
})
