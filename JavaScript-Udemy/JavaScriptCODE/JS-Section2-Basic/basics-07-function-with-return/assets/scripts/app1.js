// const defaultResult = 0;
// let currentResult = defaultResult;
// let result;

// function add (n1, n2){
//     result = n1+n2
//     return result;
// }

// add(1,2);
// currentResult = result;

// let calculationDescription = `(${defaultResult} + 10) * 3 / 2 - 1`;

// outputResult(currentResult, calculationDescription);

const defaultResult = 0;
let currentResult = defaultResult;

function add (n1, n2){
      currentResult = n1+n2
    return currentResult;
} // 함수는 전역컨텍스트에 접근할 수 있다.

add(1,3);


let calculationDescription = `(${defaultResult} + 10) * 3 / 2 - 1`;

outputResult(currentResult, calculationDescription);

