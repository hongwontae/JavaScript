
const person1 = { name: 'Max' };
const person2 = { name: 'Manuel' };

const personData = new Map([[person1, [{ date: 'yesterday', price: 10 }]]]);

personData.set(person2, [{ date: 'two weeks ago', price: 100 }]);

console.log(personData);
console.log(personData.get(person1)); // 맵의 키에 접근해서 값을 가져오는 과정
console.log(person1.name) // 일반객체의 값을 가져오는 과정

for (const [key, value] of personData.entries()) {
  console.log(key, value);
}
console.log(personData.entries())
console.log('entries()')

for (const key of personData.keys()) {
  console.log(key);
}

for (const value of personData.values()) {
  console.log(value);
}
console.log(personData.values())

console.log(personData.size);