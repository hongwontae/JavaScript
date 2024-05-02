const defaultResult = 0;
let currentResult = defaultResult;

function add() {
  currentResult = currentResult + userInput.value;
  outputResult(currentResult, ''); // 만약 이 함수가 없다면 아무것도 실행하지 못한다.
}

addBtn.addEventListener('click', add);
// 불완전한 코드이다. 수학적 계산이아닌 문자 계산이 되고 있다.
