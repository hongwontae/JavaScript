var name = 'zero';
function outer() {
  console.log('외부', name);
  function inner() {
    var enemy = 'nero';
    console.log('내부', name);
  }
  inner();
}
outer();
//console.log(enemy); // undefined

var x = 'global';
function ex() {
  var x = 'local';
  x = 'change';
}
ex(); // x를 바꿔본다.
console.log(x); // 여전히 'global'

console.log("----------------------------------------------------------")

var x1 = 1;

function foo() {
  var x1 = 10; //우선순위 bar() 보다 아래
  bar();
}

function bar() {
  console.log(x1);
}

foo(); // 10? 1?
bar(); // 1