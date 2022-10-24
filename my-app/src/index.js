const URL = 'https://api.thedogapi.com/v1/breeds/';

const axios = require('axios').default;

function grabTheData(event) {
    console.log('About to fetch data');
    axios.get(URL + 1)
        .then(res => {
            console.log(res.data)
        })
        .catch(err => {
            debugger
        })
};

const theButton = document.querySelector('#theButton');
theButton.addEventListener('click', grabTheData);