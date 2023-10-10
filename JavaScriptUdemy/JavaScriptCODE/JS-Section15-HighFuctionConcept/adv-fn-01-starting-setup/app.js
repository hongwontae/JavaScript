function add (num1, num2){
    return num1+num2
};

console.log(add(1,2))
console.log(add(12,15));
// 같은 값을 입력하면 항상 같은 값을 반환한다. => 순수함수의 예시

function addRandom(num1){
    return num1+Math.random();
}
console.log(addRandom(5)) 
// 비 순수 함수 => 같은 값을 입력하더라도 반환값은 상시 달라진다.

let previousResult = 0;
function addMoreNumbers(num1, num2){
    const sum = num1 + num2;
    previousResult = sum;
    return sum;
}

console.log(addMoreNumbers(1,2))

// 이 함수는 비 순수 함수이다. 부수 효과를 만들어내기 때문이다.
// 함수의 밖에서 정의된 변수를 바꾸는 행위 => previousResult = sum;

// function sendDataToServer(){}
// 비순수 함수라는 것을 의미하도록 함수이름을 지어주는 것이 좋다.
