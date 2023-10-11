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














