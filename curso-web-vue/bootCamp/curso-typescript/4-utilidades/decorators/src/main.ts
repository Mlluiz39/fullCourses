// Decorators
function logger(text: string) {
  return (target: any) => {
    console.log(target, text)
  }
}
@logger('Marcelo')
class API {}

//Decorator - fazer anotação da versão da API

function setVersion(version: string) {
  return (constructor: any) => {
    return class extends constructor {
      version = version
    }
  }
}

@setVersion('1.0.0')
class API2 {}

console.log(new API2())
