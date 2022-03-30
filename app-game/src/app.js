const pickUpHeightAndWidth = () => {
  let largura = window.innerWidth
  let altura = window.innerHeight

  console.log(largura, altura)
}
window.addEventListener('resize', pickUpHeightAndWidth)
