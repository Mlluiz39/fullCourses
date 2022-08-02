interface User {
  readonly name: string;  /* aqui não pode ser alterado pois é 
  somente leitura é como se fosse atribuído name como const
  */
  age: number;
}

let user: User = {
  name: 'Marcelo',
  age: 25
}

user.name = 'Marcelo Luiz';  // deu erro devido ao readonly
user.age = 42;

console.log(user);
