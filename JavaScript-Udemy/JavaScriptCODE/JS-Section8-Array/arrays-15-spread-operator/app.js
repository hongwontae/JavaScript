

const prices = [10.99, 5.99, 3.99, 6.59];

const nameFragments = ['Max', 'Schwarz'];
const name = nameFragments.join(' ');
console.log(name);


const copy1 = [...nameFragments];
console.log(copy1);
nameFragments.push(30);
console.log(copy1,nameFragments)
// 복사되어 새롭게 태어난 copy1을 증명

console.log(Math.min(...prices))
// 3.99가 최소값 전개연산자는 ,로 이루어진 리스트라는 것을 증명

const persons = [{ name: 'Max', age: 30 }, { name: 'Manuel', age: 31 }];
const copy2 =[...persons]

persons.push(100);

console.log(persons)
console.log(copy2)

// 복사된 배열은 새로운 배열이다. 상호작용 하지 않음을 증명

persons[0].age=100;
console.log(persons);
console.log(copy2);
// 객체는 상호작용을 한다. why? => 객체는 기존의 참조값을 가지고 있기 때문이다. ...persons로 새로운 배열만 만들었기 때문

const copy3 = persons.map((person)=>({
  name : person.name,
  age : person.age
}))

persons[0].name = 'HWT'
console.log(persons)
console.log(copy3)

// 객체에도 새로운 값을 부여했다. => 다른 참조값 주소를 가지고 있기에 상호작용없음을 증명