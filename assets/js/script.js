// Elements
const numberPicker = document.querySelector(".numberPicker");
const resultPicker = document.querySelector(".resultPicker");

const listNumber = document.querySelector('.listNumbers');

const inputAmount = document.getElementById("number");
let amount = Number(inputAmount.value);
const inputStart = document.getElementById("start");
let start = Number(inputStart.value);
const inputEnd = document.getElementById("end"); 
let end = Number(inputEnd.value);

const offerButton = document.getElementById("offerButton");
const resetOfferButton = document.getElementById("resetOfferButton");
const noRepeatButton = document.getElementById("btnNoRepeat");

// Events
offerButton.addEventListener('click', drawNumber)
resetOfferButton.addEventListener('click', drawAgain)

// Functions
function drawNumber() {
  numberPicker.classList.add('hidden');
  resultPicker.classList.remove('hidden');
  resultPicker.style.zIndex = '1'

  let arrayNumbers = generateRandomNumbers(amount, start, end);

  createElements(arrayNumbers);
}

function drawAgain() {
  resultPicker.classList.add('hidden');
  numberPicker.classList.remove('hidden');
}

// Aux Functions
function generateRandomNumbers(qtd, min, max) {
  let numbers = [];
  
  for (let i = 0; i < qtd; i++) {
    let number = Math.floor(Math.random() * (max - min + 1)) + min; // 1 número 
    numbers.push(number);
  }
  
  return numbers;
}

function createElements(numbers) {
  for (let i = 0; i < numbers.length;i++) {
    console.log(i + 1)
  }
} // Arrumar o zindex  edepois o console