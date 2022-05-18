const navigation = document.querySelector('[data-js="navigation"]')
const body = document.querySelector('body')
const openNavigation = document.querySelector('[data-js="open-navigation"]')
const closeNavigation = document.querySelector('[data-js="close-navigation"]')

const home = document.querySelector('[data-js="home"]')
const services = document.querySelector('[data-js="services"]')
const about = document.querySelector('[data-js="about"]')

document.addEventListener('scroll', () => {
  scrollY > 0
    ? navigation.classList.add('scroll')
    : navigation.classList.remove('scroll')
})

openNavigation.addEventListener('click', () => {
  body.classList.add('menu-expanded')
})

closeNavigation.addEventListener('click', () => {
  body.classList.remove('menu-expanded')
})
