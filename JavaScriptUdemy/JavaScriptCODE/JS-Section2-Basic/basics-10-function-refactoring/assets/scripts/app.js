const defaultResult = 0;
let currentResult = defaultResult;

function add1 () {
  return parseInt(userInput.value)
}

function add() {
  //const user = parseInt(userInput.value)
  const adding = add1();
  const calcDescription = `${currentResult} + ${adding}`;
  currentResult = currentResult + parseInt(userInput.value);
  outputResult(currentResult, calcDescription);
}

addBtn.addEventListener('click', add);


