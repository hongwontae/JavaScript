let name = null;
console.log(name);

let name1;
console.log(name1);

console.log(typeof name); // object
console.log(typeof name1) // undefined

console.log(name == name1); // true => 둘 다 값이 없음
console.log(name === name1); // false => 값이 없는 것은 같지만 데이터 타입이 다름