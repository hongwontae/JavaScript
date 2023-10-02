let a = [1,2,3,4,5,6,7,8,9,10];

let ll = a.forEach((ele, idx, arr) => {
     console.log(`index = ${idx}, value = ${ele}`);    
}) // for을 향상시킨거
console.log(ll) // forEach의 대입값이 undefined라는 말은 return이 아무것도 반환하지 않는다는 말이다.


let a1 = a.map((ele, idx, map) => {
    return ele*2
})
console.log(a1);


let a2 = [10,20,30,40,50,60,70];
let a3 = a2.reverse(); // 순서를 뒤집어버리는 메서드
console.log(a3);

let a4 = [10,100,2,2000,37,400];
console.log(a4); // 들어간 순서부터 출력된다.
let a5 = a4.sort((a,b) => { // 배열을 정렬하는 메서드, 문자열일 경우 유니코드 기준
    //return a-b; // 오름차순 정렬
    return b-a // 내림차순 정렬
})
console.log(a5);


let a6 = [5,10,15,20,25,30,35,40];
let a7 = a6.filter((ele,idx,arr) => {
    return ele === 5*(idx+1)
})
console.log(a7);


let a8 = [2,4,6,8,10,12,14,16,18,20];
let a9 = a8.reduce((acc,cur) => {
    return acc+cur
});

console.log(a9); //110

let a10 = 'String Number Boolean'
let a11 = a10.split(' ',2); // 1. 구분자, 2. 총 개수 제어
console.log(a11);

let a12 = ['hwt', '1', '2'];
let a13 = a12.join(' ');
console.log(a13);


let a14 = ['A','B','C']
console.log(a14.includes('A')); // true
console.log(a14.includes('b')); //false


let a15 = ['A','B','C',1,2,3];
a15.forEach(function(currentValue, idx, arr){
    console.log(currentValue % 2)
}); // forEach는 배열 향상 반복문이라고 생각하면 된다.


let a16 = [1,2,3,4,5,6,7,8,9,10];
let a17 = a16.map((ele,idx,arr) => ele*2);
console.log(a17); // 반환값은 배열


let a18 = [1,2,3,4,5,6,7,8,9,100];
let a19 = a18.filter((ele, idx, arr) => {
    return ele === arr[idx];
}) // 배열을 순회하면서 조건에 맞는 것만 취합하여 배열로 반환한다.
console.log(a19);


let b = [1,'a',2,'b',3,4,'c'];
console.log(b.reverse());
console.log(b.sort((a,b)=>b-a));


let b1 = [10,20,30,40,50,60,70,80,90,100];
let b2 = b1.reduce((acc,cur,idx,arr) => {
    return acc+arr[idx];
},1000);
console.log(b2);

let b3 = 'koala3121 dnjsxoghd, q2tlxm@12';
let b4 = b3.split(' ',2);
console.log(b4);

let b5 = b4.join(' ');
console.log(b5);

let a100 = [1,2,3,4,5];
  let b100 = a100.reduce((acc, cur, idx, arr) => {
    return acc+cur
  },10) // => 25
  console.log(b100);


let o = [1,2,3,4,5];
let o1 = ['start',,...o,'end']; // 나머지 값들을 다 받아서 배열이나 객체로 만든다. => rest
console.log(o1);

let [o2,...o3] = o;
console.log(o2); // 1
console.log(o3); // [2345] // 압축된 값들을 풀어내버린다. => spread

let o4 = {nam : 'hhwtt', ages : 300, games : 'good games'};
let o5 = {...o4};
console.log(o5); 

let {nam, ages} = o4; 
console.log(nam);
console.log(ages);
