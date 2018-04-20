const axios = require('axios');

document.addEventListener('DOMContentLoaded', () => {
    console.log('loaded');

    let id = '0201558025';

    axios.get(`/books/${id}`)
    .then(function (response) {
        console.log(response);
    })
    .catch(function (error) {
        console.log(error);
    });

    let query = "grace hopper";
    axios.get(`/search?string=${query}`)
    .then(function (response) {
        console.log(response);
    })
    .catch(function (error) {
        console.log(error);
    });
    
})
