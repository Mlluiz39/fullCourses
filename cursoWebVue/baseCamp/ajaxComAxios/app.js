let button = document.querySelector('button')

button.addEventListener('click',() => {
  axios.get('https://api.github.com/users/Mlluiz39')
  .then((response) => {
    let data = response.data
    console.log(data)
  })
  .catch((error) => {
    console.log(error)
  })
})