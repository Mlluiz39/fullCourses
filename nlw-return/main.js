const navigation = document.querySelector('[data-js="navigation"]')
const body = document.querySelector('body')
const openMenu = document.querySelector('[data-js="open-navigation"]')
const closeMenu = document.querySelector('[data-js="close-navigation"]')
const home = document.querySelector('[data-js="home"]')
const services = document.querySelector('[data-js="services"]')
const about = document.querySelector('[data-js="about"]')

document.addEventListener('scroll', () => {
  scrollY > 0
    ? navigation.classList.add('scroll')
    : navigation.classList.remove('scroll')
})

openMenu.addEventListener('click', () => {
  body.classList.add('menu-expanded')
})

const clickToCloseMenu = (...args) => {
  closeMenu.addEventListener('click', () => {
    body.classList.remove('menu-expanded')
  })
  home.addEventListener('click', () => {
    body.classList.remove('menu-expanded')
  })
  services.addEventListener('click', () => {
    body.classList.remove('menu-expanded')
  })
  about.addEventListener('click', () => {
    body.classList.remove('menu-expanded')
  })
}

clickToCloseMenu(closeMenu, home, services, about)

ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700,
}).reveal(
  `
#home,
#home img, 
#home .stats, 
#services,
#services header,
#services .card,
#about,
#about .header,
#about .content,`,
  { delay: 300 }
)
