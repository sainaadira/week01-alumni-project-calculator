// declaring variables for the button classes and query querySelectorAll
// selects all the buttons with that class name

let input = document.querySelector('.input')
let equalButton = document.querySelector('.equal')
let clearButton = document.querySelector('.clear')
let operatorButton = document.querySelectorAll('.operator')
let numberButton = document.querySelectorAll('.num')


// calculator is the object
let calculator = {
  operator: '',
  valueOne: 0,
  valueTwo: 0,
  equal: 0,

  // when operator is clicked value one  and operator is set
  // the parseInt method converts the input value into a number
  calcOperator() {
    let {
      valueOne,
      operator,
    } = calculator
    // trim function removes the white space from the beginning and end of a string
    valueOne = parseInt(input.value.trim())
    input.value = ''

  },

  // when equal is clicked the conditions set up below set the equation
  calcEquation() {
    // destructured values that are being called from the calculator object
    let {
      valueOne,
      valueTwo,
      operator
    } = calculator
    valueTwo = parseInt(input.value.trim())

    // conditions to execute when operators are pressed


    if (operator === '+') {
      input.value = valueOne + valueTwo
    } else if (operator === '-') {
      input.value = valueOne - valueTwo
    } else if (operator === '*') {
      input.value = valueTwo * valueTwo
    } else if (operator === '/') {
      input.value = valueOne / valueTwo
    }
    // operator = ''
  },


  clear() {
    let {
      operator,
      valueOne,
      valueTwo
    } = calculator

    input.value = ''
    operator = ''
    valueOne = 0
    valueTwo = 0
  }

}

// when number button gets clicked add number text to input display
for (let i = 0; i < numberButton.length; i++) {
  numberButton[i].addEventListener('click', (e) => {
    /*Credit to MDN: The preventDefault() method cancels the event if it is cancelable,
   meaning that the default action that belongs to the event will not occur.*/
    e.preventDefault();
    // ******* i changed it to input.value instead of input.textContent and the numbers now display in the input..
    input.value += e.target.textContent
  })
}

// when operator gets clicked change value one and operator
for (let i = 0; i < operatorButton.length; i++) {
  operatorButton[i].addEventListener('click', (e) => {
    e.preventDefault();
    calculator.operator = e.target.textContent
    calculator.calcOperator()

  })
}

// when equal button gets clicked change value two and equate
equalButton.addEventListener('click', calculator.calcEquation)

// clears everything upon click event
clearButton.addEventListener('click', calculator.clear)
