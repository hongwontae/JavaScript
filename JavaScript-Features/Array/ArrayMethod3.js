// 전개연산자
let a = [1,2,3,4,5];
let a1 = [1000,...a,'ko']; // a의 배열을 단일 요소들로 풀어버린다. => Spread 연산자
console.log(a1);

// 구조 분해 할당
let a2 = [1,2,3,4,5];
let [a3,...a4] = a2; // a2에 있는 배열을 ...a4는 배열로 수집한다. => Rest 연산자이다.
console.log(a3);
console.log(a4);

let b = [1,2,3,4,5];
function add (a,b,...c){
    console.log(a)
    console.log(b)
    console.log(c);
}

add(...b);


let good = {name : 'hwt', age : 20};
let {name, age} = good;
console.log(name);
console.log(age);






