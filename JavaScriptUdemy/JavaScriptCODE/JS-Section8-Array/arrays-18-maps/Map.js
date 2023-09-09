let animals = new Map([
    ["wolf", "howling"]
]);
// 이차원 배열

animals.set("dog", "woof");
// use set Chaining
animals.set("cat", "meow")
       .set("elephant", "toot");
       
console.log(animals);
// Map(4) {'wolf' => 'howling', 'dog' => 'woof', 'cat' => 'meow', 'elephant' => 'toot'}
console.log(animals.entries()) // for of를 사용가능하게 만드는 메서드

for(const [key,value] of animals){
    console.log(key,value)
}

animals.get("dog"); // woof
animals.get("fox"); // undefined

animals.size; // 4

animals.has("elephant"); // true
animals.has("bird"); // false

animals.delete("dog"); // true
animals.delete("bird"); // false

console.log(animals);
// Map(3) {'wolf' => 'howling', 'cat' => 'meow', 'elephant' => 'toot'}

animals.clear();
console.log(animals); // Map(0) {size: 0}

console.log('-----map2--------')


const maxInfoMap = new Map([
    ['name', '김맥스'],
    ['age', 25],
    ['major', '영문학'],
  ]);

  console.log(maxInfoMap.entries());
  // MapIterator { ["name", "김맥스"],["age", 25],["major", "영문학"]}
  // MapIterator {'name' => '김맥스', 'age' => 25, 'major' => '영문학'}

  for (const [key, value] of maxInfoMap) {
    console.log(key, value);
  }

console.log('----------------- animal2 --------------------------------')

let animals2 = new Map();
animals2.set("dog", "woof")
       .set("cat", "meow")
       .set("elephant", "toot");
console.log(animals2) // 맵 객체 출현

console.log(animals2.keys())
// MapIterator {'dog', 'cat', 'elephant'}
// for of를 돌 수 있다. for in은 번거롭다. 
// 중괄호에 둘러싸여 있지만 하나의 값 다음에 콤마가 나옴으로 배열과 가깝다.
for (let name of animals2.keys()) {
    console.log(name); // dog, cat, elephant
} 

for (let howling of animals2.values()) {
    console.log(howling); //woof, meow, toot
}

console.log(animals2.entries())
for (let [key, value] of animals2) {// animals는 animals.entries()와 동일
    console.log(`${key} goes ${value}`);
    // dog goes woof , cat goes meow, elephant goes toot
}

// animals2.forEach((value, key, map) => {
//     console.log(`${key} : ${value}`);
//     // dog : woof, cat : meow, elephant : toot
// });


console.log('----------------------- My Map ----------------------------')

const player = new Map();
player.set(8,'Jerrad')
player.set(7,'Coutinew').set(11,'Salah').set(10,'Allister')
console.log(player) // 맵객체 반환
console.log(player.get(8)) // 키에 관련된 값 반환
console.log(player.has(10)) // 키의 존재 유무를 Boolean으로 반환
console.log(player.size) // player의 길이를 반환 => 4
console.log(player.delete(7)) // delete의 매개변수로 키를 줘서 해당되는 키-값 삭제, 삭제유무를 Boolean으로 반환
console.log(player) // 3개 출력
console.log(player.clear()); // clear 다 지워버린다. 
console.log(player) // 0개 출력


const player2 = new Map();
player2.set(1,'AlliSong').set(3,'Alexander Aronld').set(8,'Domick Sozbo').set(7,'Milner')
console.log(player2)
console.log(player2.keys()); // 맵 객체 => 이터레이터 객체로 바꾸는데 key가진다.
console.log(player2.values()) // 맵 객체 => 이터레이터 객체로 바꾸는데 values만 가진다.
console.log(player2.entries()); // 맵 객체 => 이터레이터 객체로 바꾸는데 한 라인에 key-values가 놓여져 있다.

for(const a of player2.keys()){
    console.log(a)
}; // 1,3,8,7 => 맵 이터레이터 객체가 배열과 유사하기 때문에 for-of를 돌 수 있는 것이다.

for(const b of player2.values()){
    console.log(b)
} // 맵 객체의 values만 반환된다.

for(const [key,values] of player2.entries()){
    console.log(key)
    console.log(values)
}

const c = new Map([1,2,3],[4,5,6]);
console.log(c)
