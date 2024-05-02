let mineSet = new Set([0]);
console.log(mineSet)

// use add Chaining
mineSet.add(1).add(5); // Set { 1, 5 }
console.log(mineSet)
mineSet.add(5); // Set { 1, 5 }
console.log(mineSet) // 중복을 허용하지 않는다.

mineSet.add('some text'); // Set { 1, 5, 'some text' }
console.log(mineSet)
let o = {a: 1, b: 2};
mineSet.add(o);
mineSet.add({a: 1, b: 2}); // o와 다른 객체를 참조하므로 괜찮음
console.log(mineSet);
// Set(6) {0, 1, 5, 'some text', {a: 1, b: 2}, {a: 1, b: 2}}

mineSet.has(1); // true
mineSet.has(o); // true
mineSet.has(3); // false

mineSet.size; // 6

mineSet.delete(5); // true
mineSet.delete(3); // false

console.log(mineSet);
// Set(5) {0, 1, 'some text', {a: 1, b: 2}, {a: 1, b: 2}}

mineSet.clear();
// Set(0) {size: 0}

const a = new Set();
a.add(1).add(2).add(3).add(4).add(5);
console.log(a)

for(const a1 of a){
    console.log(a1)
}
for(const a1 of a.keys()){
    console.log(a1)
}

for(const a1 of a.values()){
    console.log(a1) 
}

console.log('-----entries------')

for(const [k,v] of a.entries()){
    console.log(k)
    console.log(v)
} 

for(const a1 of a.entries()){
    console.log(a1)
} // 키와 값을 가진 이터러블 객체를 생성한다. 하지만 그 키-값은 [] 소괄호에 묶여 있어서 따로 빼기위해 [k,v]를 사용한다.\


const array = [0, 1, 2, 3];

let mineSet2 = new Set(array);
console.log(mineSet2); // Set(4) {0, 1, 2, 3}


let mineSet3 = new Set([0, 1, 2, 3]);

// 1. 전개 연산자 사용
const arr1 = [...mineSet3];
console.log(arr1); // [0, 1, 2, 3]

// 2. Array.from 사용
const arr2 = Array.from(mineSet3);
console.log(arr2); // [0, 1, 2, 3]