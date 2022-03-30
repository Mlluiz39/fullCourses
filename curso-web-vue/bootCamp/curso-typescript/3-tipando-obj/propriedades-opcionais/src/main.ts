interface User {
  name: string
  address?: {
    district?: string // propriedade opcional com o uso da interrogação
    city: string
    UF: string
  }
}

function showCity(user: User) {
  return user.address ? user.address.city : 'Não existe'
  /*
  return user.address?.city  pode ser assim tbm porem vai retornar undefined 
  */
}

const response = showCity({
  name: 'Marcelo',
  address: {
    district: 'Centro',
    city: 'São Paulo',
    UF: 'SP'
  }
})

console.log(response)
