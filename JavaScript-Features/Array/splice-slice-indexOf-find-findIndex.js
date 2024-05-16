// let a1 = true;
let a1 = ' asasdas'
let a2 = Array.from(a1);
console.log(a2);

let a3 = {ㅁ : 'ㅁ', ㄴ : 'ㄴ'};
let a4 = Array.of(a3);
console.log(a4);

// Array.from()은 유사배열객체를 변환/ Array.of()는 모든 값을 받지만 하나의 값으로 인식하여 받는다.


let a5 = [0,1,2,3,4,5]
a5.splice(0, 2, 1,1,1,1);
console.log(a5);

// splice는 기존의 배열의 값만 변경하는 것이다. 새로운 배열 생성x
// (시작할 인덱스, 삭제할 개수, 추가할 요소)


let a6 = [0,1,2,3,4,5,6,[7,8]];
let a7 = a6.slice();
console.log(a6 === a7); // false

a6[7][0] = 'HWT';
console.log(a7);

let a8 = a6.slice(1,5);
console.log(a8);

// slice는 얕은 참조를 하는 메서드이다. => 중첩 값의 주소까지 바꾸지 못한다.
// slice (인덱스, 길이)


let a9 = ['h','w','t','h'];
console.log(a9.indexOf('h',1));
// indexOf(value) => 값을 넣으면 해당되는 인덱스를 반환한다.
// 겹치는 값이 존재하면 첫 번쨰로 찾은 값을 반환한다.
// indexOf(value, length) => length를 넣으면 그 길이 이후부터 찾아라


let a10 = [
    {id : 1},
    {id : 2},
    {id : 3},
    {id : 3, age : 30},
];
let a11 = a10.find((ele)=>{
    return ele.id === 3;
});
console.log(a11);


let a12 = [
    {id : 1},
    {id : 2},
    {id : 3},
    {id : 3},
    {id : 4},
];
console.log(a12.findIndex((ele)=>{
    return ele.id === 3
}));

// find/findIndexOf => 일치하는 값을 찾으면 그 즉시 반환하고 종료된다.
// find는 요소를 반환하고, findIndex는 index를 반환한다.




