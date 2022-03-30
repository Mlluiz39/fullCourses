const buscar = (vetor, k) => {
  let i = 1
  while (i <= vetor.length) {
    if (vetor[i] == k) {
      return i
    }
    i++
  }
  return -1
}

console.log(buscar([1, 2, 3, 4, 6, 7, 8, 9, 10], 5))
