// DOM elements
const resultsEl = document.getElementById('result');
const lengthEl = document.getElementById('length');
const uppercaseEl = document.getElementById('uppercase');
const lowercaseEl = document.getElementById('lowercase');
const rnumberEl = document.getElementById('number');
const symbolEl = document.getElementById('symbol');
const generateEl = document.getElementById('generate');
const clipboardEl = document.getElementById('clipboard');

const randomFunc = {
    lower: getRandomLower,
    upper: getRandomUpper,
    number: getRandomNumber,
    symbol: getRandomSymbol
};

generateEl.addEventListener('click',() => {
    const length = lengthEl.value;

    console.log(typeof length);
})

// Generator Functions - http://net-comber.com/charset.html

function getRandomLower() {
   return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function getRandomUpper() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
 }

 function getRandomNumber() {
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
 }

 function getRandomSymbol() {
     const symbols = '!@#$%^&*(){}[]=<>/,.'
    return symbols[Math.floor(Math.random() * symbols.length)];
 }

console.log(getRandomSymbol());
