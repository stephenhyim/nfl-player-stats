const express = require('express')
const app = express()
// const http = requestuire('http').Server(app)
const path = require('path')
const fetch = require('node-fetch')
const PORT = 8000

app.use(express.static('public'))

app.get('/', (request, res) => {
  res.sendFile(path.join(__dirname, './public/index.html'))
})

// create route
app.get('/fighters', (request, response) => {
  // make api call using fetch
  fetch('http://ufc-data-api.ufc.com//api/v1/us/fighters')
  .then((response) => {
      return response.text();
  }).then((body) => {
      let results = JSON.parse(body)
      console.log(results) // server log
      response.send(results) // sends to frontend
    });
});

app.listen(PORT, () => {
  console.log(__dirname);
  console.log(`listening on ${PORT}`)
})
