// DOM elements
const resultsEl = document.getElementById('result');
const lengthEl = document.getElementById('length');
const uppercaseEl = document.getElementById('uppercase');
const lowercaseEl = document.getElementById('lowercase');
const numberEl = document.getElementById('number');
const symbolEl = document.getElementById('symbol');
const generateEl = document.getElementById('generate');
const clipboardEl = document.getElementById('clipboard');

const randomFunc = {
    lower: getRandomLower,
    upper: getRandomUpper,
    number: getRandomNumber,
    symbol: getRandomSymbol
};

// Generate event listen
generateEl.addEventListener('click',() => {
    const length = +lengthEl.value;
    const hasLower = lowercaseEl.checked;
    const hasUpper = uppercaseEl.checked;
    const hasNumber = numberEl.checked;
    const hasSymbol = symbolEl.checked;

    resultEl.innerText = generatePassword(
        hasLower, 
        hasUpper, 
        hasNumber, 
        hasSymbol, 
        length
    );
})

// Generate password function
function generatePassword(lower, upper, number, symbol, length) {
    //1. initlaize password variable
    //2. Filter out unchecked types
    //3. Loop over the length and call a generator fuction for each type
    //4. Add final password to the password variable and return

    let generatorPassword = '';

    const typeCount = lower + upper + number + symbol;

    console.log('typeCount: ', typesCount);

    const typesArr = [{ lower }, { upper }, { number }, { symbol }].filter
    (
        item => object.values(item)[0]
    );

    console.log('typesArr: ', typesArr);

}

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
