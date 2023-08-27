const defaultResult = 0;
let currentResult = defaultResult;

function getUserNumberInput() {
  return parseInt(usrInput.value);
}

function createAndWriteOutput(operator, resultBeforeCalc, calcNumber) {
  const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`;
  outputResult(currentResult, calcDescription);
}

function add() {
  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;
  currentResult += enteredNumber;
  // alert(++currentResult) 증가연산자
  createAndWriteOutput('+', initialResult, enteredNumber);
}
// add라는 함수가 클릭통해 실행되면 일단 인풋태그의 문자열을 숫자로 바꿔서 가져온다.
// 처음 currentResult는 0이다.
// 현재 CurrentResult에다가 인풋태그로 들어온 값을 넣는다.
// CreateAndWriteOutput함수에 초기 currentResult값, 인풋태그값 + 기호를 건네준다.
// calcDesc는 숫자 표현식을 보여주고 curretnResult는 값을 보여준다.

function subtract() {
  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;
  currentResult -= enteredNumber;
  createAndWriteOutput('-', initialResult, enteredNumber);
}

function multiply() {
  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;
  currentResult *= enteredNumber;
  createAndWriteOutput('*', initialResult, enteredNumber);
}

function divide() {
  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;
  currentResult /=  enteredNumber;
  createAndWriteOutput('/', initialResult, enteredNumber);
}

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);

