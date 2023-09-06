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
    result: newResult,
  };
  logEntries.push(logEntry);
  console.log(logEntries);
}

function calculateResult(calculationType) {

  if(
    calculationType !== 'ADD' &&
    calculationType !== 'SUBTRACT' &&
    calculationType !== 'MULTIPLY' &&
    calculationType !== 'DIVIDE'
  ){
    return;
  } // 만약 OR를 사용했더라면 Subtract에 add가 올때는 true가 되어 return된다.


  if (
    calculationType === "ADD" ||
    calculationType === "SUBTRACT" ||
    calculationType === "MULTIPLY" ||
    calculationType === "DIVIDE"
  ) {
    const enteredNumber = getUserNumberInput();
    const initialResult = currentResult;
    let mathOperator;

    if ("ADD" === calculationType) {
      mathOperator = "+";
      currentResult += enteredNumber;
    } else if ("SUBTRACT" === calculationType) {
      mathOperator = "-";
      currentResult -= enteredNumber;
    } else if ("MULTIPLY" === calculationType) {
      mathOperator = "*";
      currentResult *= enteredNumber;
    } else if ("DIVIDE" === calculationType) {
      mathOperator = "/";
      currentResult /= enteredNumber;
    }

    createAndWriteOutput(mathOperator, initialResult, enteredNumber);
    writeToLog(calculationType, initialResult, enteredNumber, currentResult);
  }
}

function add() {
  calculateResult("ADD");
}

function subtract() {
  calculateResult("SUBTRACT");
}

function multiply() {
  calculateResult("MULTIPLY");
}

function divide() {
  calculateResult("DIVIDE");
}

addBtn.addEventListener("click", add);
subtractBtn.addEventListener("click", subtract);
multiplyBtn.addEventListener("click", multiply);
divideBtn.addEventListener("click", divide);
