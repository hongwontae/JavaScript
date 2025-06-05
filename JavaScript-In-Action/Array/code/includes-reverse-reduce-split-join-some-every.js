let a1 = ['H','h',1,2,3,true];
console.log(a1.includes(2));
// includes(value) 해당 배열내에 해당 값이 존재여부 boolean

let a2 = [1,2,3,4,5];
a2.reverse();
console.log(a2);
// reverse => 배열을 뒤집는 메서드
// 기존의 배열의 값을 뒤집는다.


let a3 = [10,20,30,40,50];
let a4 = a3.reduce((acc, cur, idx, arr)=>{
    return acc+arr[idx]
}, 1000);
console.log(a4);
// reduce(초기값(누적값), 순회하는값, index, Array);


let a5 = 'Hong Won Tae Koala3121 q2tlxm123@daum.net';
let a6 = a5.split(' ');
console.log(a6);
// split 문자열을 배열로 split(구분자)


let a7 = a6.join(' ');
console.log(a7);
// join은 배열을 문자열로 join(구분자)

let a8 = [
    {id : 20},
    {id : 20},
    {id : 20},
    {id : 20},
];
console.log(a8.every((ele, idx, arr)=>{
    return ele.id === 20
})) // and

console.log(a8.some((ele, idx, arr)=>{
    return ele.id === 20
})) // or

// boolean return
// 모든 값을 순회할 떄 조건이 하나라도 true라면 true 반환 = some
// 모든 값을 순회할 떄 조건이 모두 옳다면 true 반환 = every


