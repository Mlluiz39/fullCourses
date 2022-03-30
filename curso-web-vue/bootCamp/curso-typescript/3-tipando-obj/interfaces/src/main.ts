// mostrar a cidade de um usuário
type UF = 'RJ' | 'ES' | 'GO' | 'MG' | 'PR' | 'SC' | 'SP' | 'MT'

interface User {
  name: string
  address: {
    city: string
    UF: UF
  }
}

function showCity({ name, address }: User) {
  return `${name} mora em ${address.city} - ${address.UF}`
}

const dataUser = showCity({
  name: 'Marcelo',
  address: { city: 'São Paulo', UF: 'SP' },
})
console.log(dataUser)
