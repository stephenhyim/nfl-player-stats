const axios = require('axios');

document.addEventListener('DOMContentLoaded', () => {
    console.log('loaded')

    axios.get('/fighters')
    .then(function (response) {
        console.log(response.data[0]);
    })
    .catch(function (error) {
        console.log(error);
    });

})
