const defaultResult = 0;
let currentResult = defaultResult;

// function add(num1, num2) {
//     const result = num1 + num2;
// }

// currentResult = add(1, 2);
// 값이 전달되지 않음

function add (n1, n2){
    const result = n1+n2
    return result;
}

currentResult = add(3,3);


let calculationDescription = `(${defaultResult} + 10) * 3 / 2 - 1`;

outputResult(currentResult, calculationDescription);

// let currentResult = defaultResult; 함수의 선언을 여기다가 하면 위의 currentResult의 할당이 실패한다.
