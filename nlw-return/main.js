const navigation = document.querySelector('[data-js="navigation"]')

document.addEventListener('scroll', () => {
  scrollY > 0
    ? navigation.classList.add('scroll')
    : navigation.classList.remove('scroll')
})
