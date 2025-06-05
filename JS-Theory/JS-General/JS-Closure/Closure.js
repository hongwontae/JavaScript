function outerFunc() {
    // 외부 함수의 변수
    let x = 10;
  
    // 내부 함수에서 외부 함수의 변수에 접근할 수 있습니다.
    let innerFunc = function () {
      console.log(x);
    };
  
    return innerFunc;
  }
  
  let inner = outerFunc();
  inner(); // 10
// outerFunc에 선언된 변수가 존재하고 outerFunc의 호출이 완료되어 콜 스택에서 제거되었다.
// 그럼에도 불구하고 내부 함수의 innerFunc이 콜 스택에서 벗어난 외부 함수의 변수에 접근할 수 있다.
// => 선언한 시점의 부모 렉시컬 참조값이 존재하기 떄문이다.
// => 이 개념이 클로저이다.

var xy = 100;
let y = 100;

function a1(){
    let y = 10;
    console.log(y);
    a2();
}

function a2(){
    console.log(y);
};

a1();