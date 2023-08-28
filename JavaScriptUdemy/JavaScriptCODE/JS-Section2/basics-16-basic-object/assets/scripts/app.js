const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = [];

// Gets input from input field
function getUserNumberInput() {
  return parseInt(usrInput.value);
}

// Generates and writes calculation log
function createAndWriteOutput(operator, resultBeforeCalc, calcNumber) {
  const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`;
  outputResult(currentResult, calcDescription); // from vendor file
}

function sys (zoperation, zprevResult, znumber, zresult){
  const logEntry = {
    operation : zoperation,
    prevResult : zprevResult,
    number : znumber,
    result : zresult
  }
  console.log(logEntry)
  logEntries.push(logEntry)
  console.log(logEntries)
}

function test (operation, currentResult) {
  const user = {
    operation : operation,
    currentResult : currentResult
  }
  console.log(user)
}


function add() {
  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;
  currentResult += enteredNumber;
  createAndWriteOutput('+', initialResult, enteredNumber);
  sys('ADD', initialResult, enteredNumber, currentResult)
  test('ADD',currentResult) // 함수를 통해 객체에 값을 전달하는 방법을 테스트
}

function subtract() {
  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;
  currentResult -= enteredNumber;
  createAndWriteOutput('-', initialResult, enteredNumber);
  sys('SUBTRACT', initialResult, enteredNumber, currentResult)

}

function multiply() {
  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;
  currentResult *= enteredNumber;
  createAndWriteOutput('*', initialResult, enteredNumber);
  sys('MULTIPLY', initialResult, enteredNumber, currentResult)

}

function divide() {
  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;
  currentResult /= enteredNumber;
  createAndWriteOutput('/', initialResult, enteredNumber);
  sys('DIVIDE', initialResult, enteredNumber, currentResult)

}

addBtn.addEventListener('click', add); // 함수에 엑세스를 했다. 객체 내에 함수가 있다는 것이다.
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);
