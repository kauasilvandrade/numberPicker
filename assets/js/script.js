// Elements
const numberPicker = document.querySelector(".numberPicker");
const resultPicker = document.querySelector(".resultPicker");

const listNumber = document.querySelector('.listNumbers');
let elements = [];

let inputAmount = document.getElementById("number");
let inputStart = document.getElementById("start");
let inputEnd = document.getElementById("end"); 

const offerButton = document.getElementById("offerButton");
const resetOfferButton = document.getElementById("resetOfferButton");
const checkedNoRepeat = document.getElementById("checkedNoRepeat");

// Events
window.addEventListener('DOMContentLoaded', () => inputAmount.focus());

offerButton.addEventListener('click', drawNumber);
resetOfferButton.addEventListener('click', drawAgain);

inputAmount.addEventListener('input', validationInput);
inputStart.addEventListener('input', validationInput);
inputEnd.addEventListener('input', validationInput);

// Functions
function drawNumber() {
  let amount = Number(inputAmount.value);
  let start = Number(inputStart.value);
  let end = Number(inputEnd.value);
  
  if (amount === 0 || start === 0 || end === 0) {
    return
  }

  // Esconder seção numberPicker e aparecer seção resultPicker
  numberPicker.classList.add('hidden');
  resultPicker.classList.remove('hidden');
  resultPicker.style.zIndex = '1'
  
  let arrayNumbers;
  if (checkedNoRepeat.checked) {
    arrayNumbers = generateUniqueNumbers(amount, start, end);
  } else {
    arrayNumbers = generateRandomNumbers(amount, start, end);
  }
  
  createElements(arrayNumbers);
}

function drawAgain() {
  // Esconder seção resultPicker e aparecer seção numberPicker
  resultPicker.classList.add('hidden');
  resultPicker.style.zIndex = '-1'
  numberPicker.classList.remove('hidden');
  
  // Limpar campos ao voltar e lista de itens
  clean()
  
}

function createElements(numbers) {
  let counter = 0;
  
  let id = setInterval(() => {
    let li = document.createElement("li");
    li.innerHTML = `<span>${numbers[counter++]}</span>`
    elements.push(li);
    
    listNumber.append(li);
    
    // Parar loop
    if (counter >= numbers.length) {
      clearInterval(id);
    }
  }, 2000);

} 

// Aux Functions
function generateRandomNumbers(qtd, min, max) {
  let numbers = [];
  
  for (let i = 0; i < qtd; i++) {
    let number = Math.floor(Math.random() * (max - min + 1)) + min; 
    numbers.push(number);
  }
  
  return numbers;
}

function generateUniqueNumbers(qtd, min, max) {
  let numbers = new Set();

  while (numbers.size < qtd) {
    let number = Math.floor(Math.random() * (max - min + 1)) + min;
    numbers.add(number);
  }

  return [...numbers];
}

function validationInput(event) {
  let value = Number(event.target.value);

  if (value < 0) {
    event.target.value = "";
  }

  if (value > 3) {
    event.target.value = event.target.value.slice(0, 3); 
  }
  
}

function clean() {
  inputAmount.value = "";
  inputStart.value = "";
  inputEnd.value = "";

  for (item in elements) {
    elements[item].remove();
  }
}