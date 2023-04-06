// Desafio 11 - Crie a função generatePhoneNumber
const repeticao = (array) => {
  let quantity = 0;
  for (let index = 0; index < array.length; index += 1) {
    for (let index2 = 0; index2 < array.length; index2 += 1) {
      if (array[index] === array[index2]) {
        quantity += 1;
      }
    }
    if (quantity >= 3) {
      break;
    } else {
      quantity = 0;
    }
  } return quantity;
};
const erros = (array) => {
  let repetidos = repeticao(array);
  let message = true;
  for (let index = 0; index < array.length; index += 1) {
    if (array[index] < 0 || array[index] > 9 || repetidos >= 3) {
      message = false;
      break;
    } else {
      message;
    }
  } return message;
};
const generatePhoneNumber = (array) => {
  let erroMessage = erros(array);
  let message = '';
  if (array.length < 11 || array.length > 11) {
    message = 'Array com tamanho incorreto.';
  } else if (array.length === 11) {
    if (erroMessage === false) {
      message = 'não é possível gerar um número de telefone com esses valores';
    } else if (erroMessage === true) {
      message = `(${array[0]}${array[1]}) ${array[2]}${array[3]}${array[4]}${array[5]}${array[6]}-${array[7]}${array[8]}${array[9]}${array[10]}`;
    }
  } return message;
};
// Desafio 12 -  Crie a função triangleCheck

// Desafio 13 - Crie a função hydrate

/* eslint no-undef: 0 */

// Não modifique essas linhas
module.exports = {
  generatePhoneNumber: typeof generatePhoneNumber === 'function' ? generatePhoneNumber : (() => {}),
  triangleCheck: typeof triangleCheck === 'function' ? triangleCheck : (() => {}),
  hydrate: typeof hydrate === 'function' ? hydrate : (() => {}),
};
