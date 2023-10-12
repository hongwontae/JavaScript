// console.log('----------------map 반복---------------')

// let recipeMap = new Map([
//     ['cucumber', 500],
//     ['tomatoes', 350],
//     ['onion',    50]
//   ]);

//   console.log(recipeMap.keys());
//   console.log(recipeMap.values());
//   console.log(recipeMap.entries());
  
//   // 키(vegetable)를 대상으로 순회합니다.
//   for (let vegetable of recipeMap.keys()) {
//     console.log(vegetable); // cucumber, tomatoes, onion
//   }
  
//   // 값(amount)을 대상으로 순회합니다.
//   for (let amount of recipeMap.values()) {
//     console.log(amount); // 500, 350, 50
//   }
  
//   // [키, 값] 쌍을 대상으로 순회합니다.
//   for (let entry of recipeMap) { // recipeMap.entries()와 동일합니다.
//     console.log(entry); // cucumber,500 ...
// }

console.log('map declear')

let a = new Map([
    ['name','hwt'],
    ['age', 1000],
    ['class','1class']
])
console.log(a);


let a1 = new Map();
a1.set('name','hwt').set('age',1000).set('class','1class');
console.log(a1);

// 객체를 배열로 만들자. => Object.entries();
let obj = {name:'hwt', age :30};
const b = Object.entries(obj);
console.log(b);// [[name:'hwt'],[age :30]]
// 이 값을 그대로 map의 인자에 넣으면 map 객체가 된다.
// 객체 => [[],[]...] => map/ 객체를 맵으로 만드는 방법

// 배열을 객체로 만들자 => Object.fromEntries()
let arr = [['name','cool'],['age',30000],['class',1000]];
const c = Object.fromEntries(arr);
console.log(c); // c={name:cool, age:30000, class:1000}

// map => [[],[],[]...] => 객체
let map = new Map();
map.set({date : Date(2019-12-25)},'HaHaHa').set('are','동사').set('you','areare').set('class','1C');
console.log(map);

let arr2 = map.entries();
console.log(arr2);

// let obj4 = Object.fromEntries(arr2);
// console.log(obj4); => fromEntries()는 인자로 iterable한 객체를 받기 떄문에 그냥 map을 넣어도 된다.

let obj3 = Object.fromEntries(arr2);
console.log(obj3);


// 순서가 존재, 키-값으로 저장, 키로 다양한 자료형이 올 수 있다.
// new Map() => 맵을 만든다.
// Map.set(key,value) => 키와 값을 넣는다.
// Map.get(key) => key의 값을 반환한다.
// Map.delete(key) => 키의 값을 제거한다
// Map.clear() => 맵 초기화
// Map.has(key) => 키의 존재 여부 Boolean으로 확인
// Map.size => 맵의 크기를 확인한다.

// Map.keys() => 맵의 키들을 이터레이터 객체로 반환한다.
// Map.values() => 맵의 값들을 이터레이터 객체로 반환한다.
// Map.entries() => 맵의 키-값을 이터레이터 객체로 반환한다.

// Object.entries() => 객체를 배열로 만든다.
// => {name:'hwt', age: 30} => [['name','hwt'], ['age',30]];
// Object.fromEntries() => 배열을 객체로 만든다.
// [['name','hwt'], ['age',30]] => {name:'hwt', age: 30}














