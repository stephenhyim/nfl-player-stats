const render = (data) => {
    document.getElementById('main').innerHTML = data[0].first_name;
}

module.exports = render;