document.addEventListener('DOMContentLoaded', () => {
    console.log('loaded')

    fetch('/fighters')
    .then(res => {
        console.log(res)
    })

})
