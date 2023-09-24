let a = (a1) => {console.log(a1)};
let name = 'hwt';
a(name); // 1급 시민의 요건 1. 충족 변수에 함수를 대입할 수 있어야 한다.

function a2(){
    console.log('Coutinew')
}

function a3(){
    console.log('Mamadu Sakho')
}

let b = function(a,b){
    console.log(a());
    console.log(b());
}

b(a2,a3); // 2. 인자에 함수를 넣을 수 있다.


let koala3121 = function(){
    return function(){
       console.log('안녕하세요')
    }
}

ko = koala3121();
console.log(ko);