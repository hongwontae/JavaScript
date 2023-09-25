let a = [1,2,3,4,5];

for(let i=0; i<a.length; i++){
    console.log(a[i])
} // 1,2,3,4,5가 반환된다.


let a1 = [1,2,3,4,5];

let a2 = a1.map((currrentValue, idx) => {
    console.log(currrentValue);
}) // 1,2,3,4,5가 반환된다.


let a3 = [1,2,3,4,5];

a3.filter((currrentValue) => {
    console.log(currrentValue)
})

console.log('length')
let a4 = [1,2,3,4,5];
console.log(a4.length)

let a5 = [1,'홍',2,'원',3,'태'];
console.log(a5.length);

console.log('length High')
let arr = new Array();
arr[10] = 10; 
arr[11] = 11;
console.log(arr);
console.log(arr.length);


let arr2 = new Array();
arr2['A'] = 'A'; 
arr2['C'] = 'C';
console.log(arr2);1
console.log(arr2.length);

let arr3 = ['홍원태','안지연'];
console.log(arr3.length);


// Null, Undefined 병합 연산자
let b = {n : 10};
console.log(b.age ?? '객체 정의되지 않은 프로퍼티입니다.')



// 배열 중복값 제거

let c = [1,1,2,2,3,3,4,4,5,5];
console.log(c);

let c1 = new Set(c);
console.log(c1);

let c2 = Array.from(c1);
console.log(c2); // set 객체는 중복을 허용하지 않는다. 그 객체에 배열을 값을 넘기고 다시 배열로 만들면 중복값이 사라진다.

let c3 = [...c1];
console.log(c3); // set객체를 spread 연산자를 사용하여 배열로 변환시킬 수 있다.

