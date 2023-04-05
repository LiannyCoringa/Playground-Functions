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
const highestNumber = (array) => {
  let number = array[0];
  for (let index = 1; index < array.length; index += 1) {
    if (array[index] > number) {
      number = array[index];
    }
  } return number;
};
const highestCount = (array) => {
  let highest = highestNumber(array);
  let quantity = 0;
  for (let numeroRepetido of array) {
    if ((highest) === (numeroRepetido)) {
      quantity += 1;
    }
  } return quantity;
};
// Desafio 6 - Crie as funções calcTriangleArea, calcRectangleArea e calcAllAreas
const calcTriangleArea = (base, height) => (base * height) / 2;
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
    message = 'Não foi possível fazer o cálculo, insira uma forma geométrica válida';
  }
  return message;
};
// Desafio 7 - Crie a função catAndMouse
const catAndMouse = (mouse, cat1, cat2) => {
  let firstCat = cat1 - mouse;
  let secondCat = cat2 - mouse;
  if (firstCat === -1) {
    firstCat *= (-1);
  }
  if (secondCat === -1) {
    secondCat *= (-1);
  }
  let shorterDistance = '';
  if (firstCat < secondCat) {
    shorterDistance = 'cat1';
  } else if (secondCat < firstCat) {
    shorterDistance = 'cat2';
  } else if (firstCat === secondCat) {
    shorterDistance = 'os gatos trombam e o rato foge';
  }
  return shorterDistance;
};
// Desafio 8 - Crie a função fizzBuzz
const divisor3 = (array) => {
  let numerosDiv3 = [];
  for (let number of array) {
    if (number % 3 === 0) {
      numerosDiv3.push(number);
    }
  } return numerosDiv3;
};
const divisor5 = (array) => {
  let numerosDiv5 = [];
  for (let number of array) {
    if (number % 5 === 0) {
      numerosDiv5.push(number);
    }
  } return numerosDiv5;
};
const divisor3e5 = (array) => {
  let array3 = divisor3(array);
  let array5 = divisor5(array);
  let array3e5 = [];
  for (let number of array3) {
    for (let number2 of array5) {
      if (number === number2) {
        array3e5.push(number);
      }
    }
  } return array3e5;
};
const separa3 = (array) => {
  let array3 = divisor3(array);
  let array3e5 = divisor3e5(array);
  let apenas3 = [];
  for (let index = 0; index < array3.length; index += 1) {
    if (!array3e5.includes(array3[index])) {
      apenas3.push(array3[index]);
    }
  } return apenas3;
};
const separa5 = (array) => {
  let array5 = divisor5(array);
  let array3e5 = divisor3e5(array);
  let apenas5 = [];
  for (let index = 0; index < array5.length; index += 1) {
    if (!array3e5.includes(array5[index])) {
      apenas5.push(array5[index]);
    }
  } return apenas5;
};
const fizzBuzz = (array) => {
  let mensagem = [];
  let divisores3e5 = divisor3e5(array);
  let apenas3 = separa3(array);
  let apenas5 = separa5(array);
  for (let numero of array) {
    if (divisores3e5.includes(numero)) {
      mensagem.push('fizzBuzz');
    } else if (apenas3.includes(numero)) {
      mensagem.push('fizz');
    } else if (apenas5.includes(numero)) {
      mensagem.push('buzz');
    } else {
      mensagem.push('bug!');
    }
  } return mensagem;
};
// Desafio 9 - Crie a função encode e a função decode
const encode = (frase) => {
  const codigo = {
    a: 1,
    e: 2,
    i: 3,
    o: 4,
    u: 5,
  };
  let arrayObject = Object.keys(codigo);
  let retorno = '';
  let caracteres = frase.split('');
  for (let index = 0; index < caracteres.length; index += 1) {
    if (arrayObject.includes(caracteres[index])) {
      retorno += codigo[caracteres[index]];
    } else {
      retorno += caracteres[index];
    }
  } return retorno;
};
const decode = (frase) => {
  const codigo = {
    1: 'a',
    2: 'e',
    3: 'i',
    4: 'o',
    5: 'u',
  };
  let arrayObject = Object.keys(codigo);
  let retorno = '';
  let caracteres = frase.split('');
  for (let index = 0; index < caracteres.length; index += 1) {
    if (arrayObject.includes(caracteres[index])) {
      retorno += codigo[caracteres[index]];
    } else {
      retorno += caracteres[index];
    }
  } return retorno;
};
// Desafio 10 - Crie a função techList
const techList = (array, nome) => {
  let arrayOrdenado = array.sort();
  let retorno = [];
  for (let index = 0; index < arrayOrdenado.length; index += 1) {
    retorno.push({
      tech: arrayOrdenado[index],
      name: nome,
    });
  } return retorno;
};
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
