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
  // html 숫자 표현식
  outputResult(currentResult, calcDescription);
  // CurrentResult, calDescription 전달
}

function writeToLog(
  operationIdentifier,
  prevResult,
  operationNumber,
  newResult
) {
  const logEntry = {
    operation: operationIdentifier,
    prevResult: prevResult,
    number: operationNumber,
    result: newResult
  };
  logEntries.push(logEntry);
  console.log(logEntries);
}

function calculateResult(calculationType){
  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;
  let mathOperator;

  if('ADD'===calculationType){
    currentResult += enteredNumber
    mathOperator = '+'
  } else {
    currentResult -= enteredNumber;
    mathOperator = '-'
  }

  createAndWriteOutput(mathOperator, initialResult, enteredNumber)
  writeToLog(calculationType, initialResult, enteredNumber, currentResult)
}

function add() {
  calculateResult('ADD')
}

function subtract() {
  calculateResult('SUBTRACT')
}

function multiply() {
  const enteredNumber = getUserNumberInput();
  // 3이 enteredNumber로 들어왔다.
  const initialResult = currentResult;
  // 현재 currentResult는 2 Initial 2
  currentResult *= enteredNumber;
  // 2*3 = 6 cR은 6이다.
  createAndWriteOutput('*', initialResult, enteredNumber);
  // 함수에 값을 전달한다.
  writeToLog('MULTIPLY', initialResult, enteredNumber, currentResult);
  // 함수에 값을 전달한다.
}

function divide() {
  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;
  currentResult /= enteredNumber;
  createAndWriteOutput('/', initialResult, enteredNumber);
  writeToLog('DIVIDE', initialResult, enteredNumber, currentResult);
}

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);
