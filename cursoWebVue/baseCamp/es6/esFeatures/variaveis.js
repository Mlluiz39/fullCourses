// var, const & let

{
    var car = 'fusca'  // aqui vai escapar a variavel
  }
  console.log(car)
  
  
  const person = 'Marcelo'
  //person = 'Julia'  // aqui não vai aceitar reatribuição
  console.log(person)
  
  //exemplo de mutação que é aceito em constantes
  const person1 = {name: 'Marcelo Luiz'}
  person1.name = 'Marcelo Luiz'
  
  //porem vai alterar no objeto original
  console.log(person1)
  console.log(person1)
  
  
  {
    const car1 = 'fusca'  // aqui fica restrito ao escopo de bloco
  }
  
  //console.log(car1)
  
  let name1 = 'Marcelo'
  name1 = 'Marcelo Luiz'  // aqui podemos reatribuir desde que não coloque o nome let
  
  console.log(name1)
  
  
  // Quando usar let e const
  
  //exemplo se uso do let, pois queremos que seja reatribuido o valor de i ou seja
  //não faz sentido usar const e não aceitaria
  // tambem não precisamos usar var pois já é escapado a variavel com let 
  for(let i = 0; i < 10; i++) {
    console.log(i)
  }