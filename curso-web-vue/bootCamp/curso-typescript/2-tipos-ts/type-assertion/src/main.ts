const inputName = document.querySelector('#name') as HTMLInputElement
/* 
acima usamos o "as HTMLInputElement" para dizer ao typescript qual é o tipo pois temos certeza que vai vir um valor do input
*/

inputName.value

const bodyValue = document.querySelector('body')
/* acima o typescript sabe o tipo do bodyValue pois body é um valor conhecido por ele como tbm o input por exemplo */

