// // 일반 함수 실행했을 떄의 this 작동방식
// // => 전역객체를 가르킨다.
// var age = 100;
// console.log(this);
// // 전역 객체를 가르키고 있음
// var a ='hwt';
// console.log(window.a);
// // let,const를 전역 객체로 만들면 window 전역객체에 포함되지 않은 전역객체이다.
 
// function foo () {
//   var age = 99;
//   bar(age)
// }
 
// function bar () {
//   console.log(this.age);
// }
 
// foo();

// dot this
// 앞의 있는 객체를 this가 참조한다. 없으면 window 전역객체를 참조한다.
function foo() {
  console.log(this.age);
}
var age = 100;

var ken = {
  age: 36,
  foo: foo
}
var wan = {
  age: 32,
  foo: foo
}
ken.foo();  // 36
wan.foo();  // 32
 
var fn = ken.foo;
fn();	// 100 => 일반적인 함수 실행이라 this가 전역객체를 가르킨다.