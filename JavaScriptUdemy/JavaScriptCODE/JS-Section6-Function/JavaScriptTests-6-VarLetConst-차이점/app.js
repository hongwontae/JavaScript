let a = 100;
function ko(){
    console.log(a)
}
ko(); // 함수의 내부에서는 외부의 전역변수에 접근할 수 있다.

var a1 = 99;
function koa(){
    console.log(a1)
}
koa();



if(true){
    var a2 =5
}
console.log(a2); // 5 출력 var는 함수의 내부에서 선언된 변수를 제외하면 전역 스코프이다.

// if(true){
//     let x=5
// }
// console.log(x); // 오류 발생한다. let과 const는 괄호안에 있다면 지역 스코프이다.


let a3 = 200;
function koal(){
    let a3=300;
    console.log(`함수내의 a3일까? 전역의 a3일까? ${a3} => 전역 변수와 지역변수의 변수명이 같으면 지역변수를 먼저 선택한다.`)
}
koal();

console.log('-------------------------------------------------------------------------------------------')
console.log('-------------------------------------------------------------------------------------------')
console.log('-------------------------------------------------------------------------------------------')
console.log('-------------------------------------------------------------------------------------------')


var x = 'global';

function foo() {
  var x = 'local';
  console.log(x);

  function bar() {  // 내부함수
    console.log(x); // ?
  }

  bar();
}

foo(); //함수 bar에서 참조하는 변수 x는 함수 foo에서 선언된 지역변수이다. 이는 실행 컨텍스트의 스코프 체인에 의해 참조 순위에서 전역변수 x가 뒤로 밀렸기 때문이다.
console.log(x); // 


var x1 = 10;
function foo1() {
  x1 = 100;
  console.log(x1);
}
// foo1(); => 함수의 변수는 전역변수에 접근할 수 있으니까 x1의 값은 100이 되고 함수 내부의 값도 100/ 전역 console도 100
// console부터 찍었으면 함수가 실행안되서 10/100 
console.log(x1); // ?
foo1();

let x2 = 10;
function foo2() {
  x2 = 100;
  console.log(x2);
}
console.log(x2); // ?
foo1(); // => 똑같이 움직인다.






