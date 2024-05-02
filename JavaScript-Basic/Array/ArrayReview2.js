let a = [1,2,3,4,5];

console.log(a.splice());

let a1 = a.splice(1,2,'111');
console.log(a); // 1,'111',4,5

let a2 = [1,2,3,4,5];
let a3 = a2.splice(0,1,'1000');
console.log(a2);

let a4 = [1,2,3,4,5];
let a5 = ['1','2','3','4','5'];
let a6 = a4.concat(a5);
console.log(a6);

let a7 = [1,2,3,4,5,6];
let a8 = a7.slice();
console.log(a8); // => 전체 복사
let a9 = a7.slice(3);
console.log(a9);
let a10 = a7.slice(2,3); // [3]
console.log(a10);

let a11 = [1,2,3,4,5];
let a12 = a11.find((value, idx, arr) => {
    return value === arr[2]
});
console.log(a12); // [3]

let a13 = ['a','b','c','d','e','f','a','b'];
let a14 = a13.indexOf('b');
console.log(a14); // 1
let a15 = a13.indexOf('a',1)
console.log(a15);

let a16 = a13.forEach(function(val,idx,arr){
    console.log(arr[idx])
})

let a17 = a13.map((val, idx, arr) => {
    return val
})
console.log(a17);

let a18 = a13.filter((val, idx, arr) => {
    return val === 'c'
})
console.log(a18)

let a19 = a7.reduce((acc, cur, idx, arr) => {
    return acc+cur;
},10)
console.log(a19);