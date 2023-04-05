// Desafio 1 - Crie a função compareTrue
const compareTrue = (bool1, bool2) => {
  let retorno = false;
  if (bool1 === true && bool2 === true) {
    retorno = true;
  } else {
    retorno = false;
  } return retorno;
};
// Desafio 2 - Crie a função splitSentence
const splitSentence = (frase) => {
  let palavras = frase.split(' ');
  return palavras;
};
// Desafio 3 - Crie a função concatName
const concatName = (array) => `${array[array.length - 1]}, ${array[0]}`;
// Desafio 4 - Crie a função footballPoints
const footballPoints = (wins, ties) => wins * 3 + ties;
// Desafio 5 - Crie a função highestCount
// const highestNumber = (array) => {
//   let number = array[0];
//   for (let index = 1; index < array.length; index += 1) {
//       if ((array[index]) > (number)) {
//           number = array[index];
//       };
//       return number;
//   };
// };
// const highestCount = (array) => {
//   let highest = highestNumber(array);
//   let quantity = 0;
//   for (let numeroRepetido of array) {
//       if (highest === numeroRepetido) {
//           quantity += 1;
//       }
//   } return quantity;
// }
// Desafio 6 - Crie as funções calcTriangleArea, calcRectangleArea e calcAllAreas
const calcTriangleArea = (base, height) => base * height / 2;
const calcRectangleArea = (base, height) => base * height;
const calcAllAreas = (base, height, form) => {
    let calcTriangle = calcTriangleArea(base, height);
    let calcRectangle = calcRectangleArea(base, height);
    let message = '';
    if (form === 'triângulo') {
        message = `O valor da área do ${form} é de: ${calcTriangle}`;
    } else if (form === 'retângulo') {
        message = `O valor da área do ${form} é de: ${calcRectangle}`;
    } else {
        message = `Não foi possível fazer o cálculo, insira uma forma geométrica válida`;
    }
    return message;
}
// Desafio 7 - Crie a função catAndMouse

// Desafio 8 - Crie a função fizzBuzz

// Desafio 9 - Crie a função encode e a função decode

// Desafio 10 - Crie a função techList

// Não modifique essas linhas
module.exports = {
  calcTriangleArea: typeof calcTriangleArea === 'function' ? calcTriangleArea : (() => {}),
  calcRectangleArea: typeof calcRectangleArea === 'function' ? calcRectangleArea : (() => {}),
  calcAllAreas: typeof calcAllAreas === 'function' ? calcAllAreas : (() => {}),
  catAndMouse: typeof catAndMouse === 'function' ? catAndMouse : (() => {}),
  compareTrue: typeof compareTrue === 'function' ? compareTrue : (() => {}),
  concatName: typeof concatName === 'function' ? concatName : (() => {}),
  decode: typeof decode === 'function' ? decode : (() => {}),
  encode: typeof encode === 'function' ? encode : (() => {}),
  fizzBuzz: typeof fizzBuzz === 'function' ? fizzBuzz : (() => {}),
  footballPoints: typeof footballPoints === 'function' ? footballPoints : (() => {}),
  highestCount: typeof highestCount === 'function' ? highestCount : (() => {}),
  splitSentence: typeof splitSentence === 'function' ? splitSentence : (() => {}),
  techList: typeof techList === 'function' ? techList : (() => {}),
};
