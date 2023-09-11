let person = {
  name: 'Max',
  age: 30,
  hobbies: ['Sports', 'Cooking'],
  greet: function() {
    alert('Hi there!');
  }
};

person.isAdmin = true;
console.log(person);

person.age = 31;
console.log(person.age); // 31

delete person.age;
console.log(person.age); // age를 삭제하여 undefined가 되었다.
console.log(person); // age라는 값이 없음