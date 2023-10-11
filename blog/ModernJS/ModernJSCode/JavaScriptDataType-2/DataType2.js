let map1 = new Map();
map1.set(true,{Korea : true});
console.log(map1);

let map = new Map();

map.set('1', 'str1');   // 문자형 키
map.set(1, 'num1');     // 숫자형 키
map.set(true, 'bool1'); // 불린형 키

console.log( map.get(1)   ); // 'num1'
console.log( map.get('1') ); // 'str1'

console.log( map.size ); // 3

console.log('----------------map 반복---------------')

let recipeMap = new Map([
    ['cucumber', 500],
    ['tomatoes', 350],
    ['onion',    50]
  ]);

  console.log(recipeMap.keys());
  console.log(recipeMap.values());
  console.log(recipeMap.entries());
  
  // 키(vegetable)를 대상으로 순회합니다.
  for (let vegetable of recipeMap.keys()) {
    console.log(vegetable); // cucumber, tomatoes, onion
  }
  
  // 값(amount)을 대상으로 순회합니다.
  for (let amount of recipeMap.values()) {
    console.log(amount); // 500, 350, 50
  }
  
  // [키, 값] 쌍을 대상으로 순회합니다.
  for (let entry of recipeMap) { // recipeMap.entries()와 동일합니다.
    console.log(entry); // cucumber,500 ...
  }

let b = {name : 'hwt', age : 30};
let b1 = Object.entries(b);
console.log(b1); // [['name','hwt'],['age',30]];
// 객체를 배열로 바꾸는 메서드이다. Object.entries()

let b2 = new Map(b1);
console.log(b2);


// let b3 = new Map(b);
// console.log(b3); 
// 일반적인 객체를 바로 map으로 바꿀수는 없다. => Symbol.iterable이 존재하지 않기 때문이다.


let fruits1 = [['banana',10000],['apple',20000],['waterMelon',300000]]

let fruits = Object.fromEntries(fruits1);
console.log(fruits)


let c = {name : 'hwt', age : 3000};
let c1 = Object.entries(c);
console.log(c1); // 일반 객체를 배열로 만든다. => 중첩 배열이다.

let c2 = new Map(c1); // iterable 객체인 배열을 받아서 map으로 만든다.
console.log(c2);


let map2 = new Map();
map2.set('banana', 1);
map2.set('orange', 2);
map2.set('meat', 4);
console.log('map2.entries()');
console.log(map2.entries());
console.log('map2')
console.log(map2);

let obj2 = Object.fromEntries(map2.entries()); // 맵을 일반 객체로 변환 (*)
let obj3 = Object.fromEntries(map2);

console.log(obj3);
console.log(obj2);


