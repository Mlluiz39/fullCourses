/*
  01

  - Inverta o valor dos booleans do console.log() abaixo;
  - O resultado exibido no console deve ser: false true.
*/

console.log(true, false, !true, !false);

/*
  02

  - Abaixo do array "animals", verifique se o animal "leão" **não** existe no  
    array. Se não existir, exiba no console a mensagem "Leão não existe no array  
    animals.";
  - Se existir, exiba no console a mensagem "Existe um leão no array animals.".
*/

const animals = ["macaco", "tucano", "elefante", "pavão", "hipopótamo"];

let isLionInAnimals = [];

for (let i = 0; i < animals.length; i++) {
  isLionInAnimals = animals.includes("leão");

  if (!isLionInAnimals) {
    console.log("Leão não existe no array animals.");
    break;
  } else {
    console.log("Existe um leão no array animals.");
    break;
  }
}

/*
  03

  - Some os números do array abaixo;
  - Se durante a soma, o resultado ultrapassar 400, pare a operação e exiba  
    a frase abaixo no console, substituindo "RESULTADO_DA_SOMA" pelo valor  
    correto.
  
  "A soma ultrapassou 400. Até aqui, o valor atual é RESULTADO_DA_SOMA."
*/

const randomNumbers = [59, 61, 73, 57, 35, 73, 21, 87, 43];
let sumRandomNumbers = 0;
const limit = 400;

for (let i = 0; i < randomNumbers.length; i++) {
  sumRandomNumbers += randomNumbers[i];

  if (sumRandomNumbers >= limit) {
    console.log(
      `A soma ultrapassou ${limit}. Até aqui, o valor atual é ${sumRandomNumbers}.`
    );
    break;
  }
}

/*
  04

  - Concatene as strings do array abaixo, formando uma frase;
  - Se durante a concatenação a palavra "certeza" existir, ela não deve ser  
    concatenada;
  - Exiba a frase no console.
*/

const sentence = [
  "A",
  "certeza",
  "dúvida",
  "é",
  "o",
  "princípio",
  "da",
  "sabedoria.",
];

let removeItem = [];

for (let i = 0; i < sentence.length; i++) {
  const newSentence = sentence[i];

  if (newSentence.includes("certeza")) {
    continue;
  }

  removeItem += newSentence.replace("", " ");
}
console.log(removeItem);

/*
  05

  - Itere sobre o array "randomValues" apenas até a 4ª string dele;
  - Exiba a string abaixo no console, mantendo a formatação de lista e inserindo  
    as informações corretas:

  "
    3 informações sobre o array randomValues:
      - As primeiras 4 strings são XX, XX, XX e XX;
      - Até que as primeiras 4 strings fossem iteradas, XX booleans foram iterados;
      - O array foi iterado por XX vezes.
  "
*/

const randomValues = [57, false, 'JS', [], true, 'HTML', 31, null, false, 'CSS', 97, true, 'Git', 11, 'sticker', false, 'GitHub', true, null]
let stringsAmount = 0;
let fourStrings = [];
let booleanAmount = [];
let totalIterations = 0;

for (let i = 0; i < randomValues.length; i++) {
  const isRandomValues = randomValues[i]
  const ifStatementTypeString = typeof isRandomValues === "string"
  const ifStatementTypeBoolean = typeof isRandomValues === "boolean"

  if (stringsAmount === 4) {
    break;
  }

  if (ifStatementTypeString) {
    stringsAmount++;
    fourStrings.push(isRandomValues);
  }

  if (ifStatementTypeBoolean) {
    booleanAmount++;
  }

  totalIterations++;
}

const lastItem = fourStrings[fourStrings.length - 1];
const InfourStringConsole = `${fourStrings.join(", ").replace(`, ${lastItem}`, ` e ${lastItem}`)}`

console.log(`3 informações sobre o array randomValues:
    - As primeiras 4 strings são ${InfourStringConsole} ;
    - Até que as primeiras 4 strings fossem iteradas, ${booleanAmount} booleans foram iterados;
    - O array foi iterado por ${totalIterations} vezes.`);

/*
  06

  - Descomente a constante abaixo e atribua a ela algum tipo de bebida. Exemplo:  
    água, refrigerante ou suco;
  - Utilize um switch statement com cases para essas 3 possibilidades de bebida;
  - Se o tipo da bebida é água, atribua à uma variável a mensagem "Substância 
    química cujas moléculas são formadas por dois átomos de hidrogênio e um de 
    oxigênio.";
  - Se o tipo da bebida é refrigerante, a mensagem "Bebida não alcoólica e não 
    fermentada, fabricada industrialmente, à base de água mineral e açúcar." 
    deve ser armazenada;
  - Se é suco, atribua a mensagem "Bebida produzida do líquido extraído de 
    frutos.";
  - Se nenhum desses 3 tipos de bebida der match, a variável deve armazenar 
    "Bebida desconhecida.";
  - Exiba a mensagem no console. Teste também as outras possibilidades de tipo  
    da bebida além da que você escolheu.
*/

const drinkType = "água";
let drinkSelected = null

switch (drinkType) {
  case "água":
    drinkSelected = "Substância química cujas moléculas são formadas por dois átomos de hidrogênio e um de oxigênio."
    break;
  case "refrigerante":
    drinkSelected = "Bebida não alcoólica e não fermentada, fabricada industrialmente, à base de água mineral e açúcar."
    break;
  case "suco":
    drinkSelected = "Bebida produzida do líquido extraído de frutos."
    break;
    default:
      drinkSelected = "Bebida desconhecida."
}

console.log(drinkSelected)

/*
  07

  - Reescreva o código comentado abaixo, utilizando um switch statement;
  - Depois de escrever o switch, modifique o valor da declaração da const "a"  
    para testar o switch que você escreveu.
*/

// const a = 2;

// if (a === 0) {
//   console.log(`O valor de "a" é ${a}`)
// } else if (a === 1) {
//   console.log(`O valor de "a" é ${a}`)
// } else {
//   console.log('O valor de "a" é qualquer número, exceto 0 e 1')
// }

const number = 0
const numberMessage = 'O valor de number é'

switch(number) {
  case 0:
    console.log(`${numberMessage} ${number}`)
    break
  case 1:
    console.log(`${numberMessage} ${number}`)
    break
    default:
      console.log(`'${numberMessage} qualquer número, exceto 0 e 1'`)
}

