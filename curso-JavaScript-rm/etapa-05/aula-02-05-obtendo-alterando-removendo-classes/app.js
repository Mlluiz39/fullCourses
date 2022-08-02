const paragraphs = document.querySelectorAll('p')

/*
console.log(paragraph.classList)

paragraph.classList.add('error')

paragraph.classList.remove('error')

paragraph.classList.add('success')
*/

paragraphs.forEach(paragraph => {
  if (paragraph.textContent.includes('error')) {
    paragraph.classList.add('error')
  }

  if (paragraph.textContent.includes('success')) {
    paragraph.classList.add('success')
  }
})

const title = document.querySelector('h1')

title.classList.toggle('test')  // como não tinha ea classe adicionou

title.classList.toggle('test')  // como já tinha ele removeu a classe