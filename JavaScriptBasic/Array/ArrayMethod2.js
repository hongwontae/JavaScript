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
