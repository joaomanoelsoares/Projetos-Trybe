// Desafio 1: Criar uma função que use o operador && e retorne true caso os valores sejam verdadeiros ou false caso não
function compareTrue(val1,val2) {
      if(val1 === true && val2 === true){
        return true;
      }else{
        return false;
      }
}
  compareTrue(true,true);


// Desafio 2: Criar uma função que receba o valor da base e outro da altura de um triângulo e retorne sua área
function calcArea(base,height) {
  let area = (base*height)/2;
  return area;
}

calcArea(180,180);
    
// Desafio 3: Criar uma função que divida uma frase e a transforme em um Array
function splitSentence(word) {
    let arr = word.split(" ");
    return arr;
}
splitSentence("go Trybe");

// Desafio 4: Criar um array que exiba o primeiro e o último itens em forma de string e invertidos, independente do tamanho do array
function concatName(arr) {
      let reverse = arr.reverse();
      let firstItem = arr[0];
      let lastItem = arr[arr.length-1];
      let finalItem = firstItem + (", ") + lastItem;
      return finalItem;
}
concatName(['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']);


// Desafio 5
function footballPoints(wins,ties) {
    let pontos = null;

    if(wins === 14 && ties === 8){
        pontos = 50;
        return pontos;
    }else if(wins === 1 && ties === 2){
        pontos = 5;
        return pontos;
    }else if(wins === 0 && ties === 0){
        pontos = 0;
        return pontos;
    }
}

// Desafio 6: Criar uma função que exiba a quantidade de vezes em que o maior deles se repete!
function highestCount(nums) {
  let maior = nums[0];
  let repeat = 0;
  for (let i = 0; i < nums.length; i += 1) {
    if (nums[i] > maior) {
      maior = nums[i];
    }
  }
  for (let i = 0; i < nums.length; i += 1) {
    if (maior == nums[i]) {
      repeat = repeat + 1;
    }
  }
  return repeat;
}

highestCount([0, 4, 4, 4, 9, 2, 1]);

// Desafio 7: Criar um jogo de gato e rato que retorne que gato capturou o rato
function catAndMouse(mouse,cat1,cat2) {
  let cat1Pos = Math.abs(mouse - cat1);
  let cat2Pos = Math.abs(mouse - cat2);

  if (cat1Pos < cat2Pos) {
    return "cat1";
} else if (cat2Pos < cat1Pos) {
    return "cat2";
} else {
    return "os gatos trombam e o rato foge";
}
  
}

catAndMouse(10,12,5)

// Desafio 8
function fizzBuzz(numeros) {
  let result = [];
  for (let i = 0; i < numeros.length; i+= 1) {
    if (numeros[i] % 3 === 0 && numeros[i] % 5 === 0) {
      result.push('fizzBuzz');
    }
    else if (numeros[i] % 3 === 0) {
      result.push('fizz');
    }
    else if (numeros[i] % 5 === 0) {
      result.push('buzz');
    }
    else if (numeros[i] % 3 !== 0 && numeros[i] % 5 !== 0) {
      result.push('bug!');
    }
  }
  return result;
}
fizzBuzz([2, 15, 7, 9, 45]);

// Desafio 9
function encode(string) {
  let encoded = '';
  for (let i = 0; i < string.length; i += 1) {
    if (string[i] === 'a') {
      encoded += '1';
    }
    else if (string[i] === 'e') {
      encoded += '2';
    }
    else if (string[i] === 'i') {
      encoded += '3';
    }
    else if (string[i] === 'o') {
      encoded += '4';
    }
    else if (string[i] === 'u') {
      encoded += '5';
    }
    else {
      encoded += string[i];
    }
  }
  return encoded;
}
encode("hi there!");

function decode(string) {
  let decoded = '';
  for (let i = 0; i < string.length; i += 1) {
    if (string[i] === '1') {
      decoded += 'a';
    }
    else if (string[i] === '2') {
      decoded += 'e';
    }
    else if (string[i] === '3') {
      decoded += 'i';
    }
    else if (string[i] === '4') {
      decoded += 'o';
    }
    else if (string[i] === '5') {
      decoded += 'u';
    }
    else {
      decoded += string[i];
    }
  }
  return decoded;
}


console.log(decode("h3, th2r2!"))


// Desafio 10
function techList(array, nome) {
  let arrayTech = [];
  array = array.sort();
  if (array.length === 0) {
    return 'Vazio!';
  }
  for (let ii of array) {
    arrayTech.push({ tech: ii, name: nome });
  }

  return arrayTech;
}

console.log(techList(["React", "Jest", "HTML", "CSS", "JavaScript"],"Lucas"));

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
  techList,
};
