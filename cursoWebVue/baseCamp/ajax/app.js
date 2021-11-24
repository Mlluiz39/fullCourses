let button = document.querySelector('button')

button.addEventListener('click',() => {
  let xhr = new XMLHttpRequest()

  xhr.open('GET', 'https://api.github.com/users/Mlluiz39')
  xhr.send()

  xhr.onreadystatechange = () => {
    if(xhr.readyState === 4) {
      let data = JSON.parse(xhr.responseText)

      console.log(data.bio)
    }
  }
})