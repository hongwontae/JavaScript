function UserInfo(name, age) {
    this.name = name;
    this.age = age;
  }
  
  let arr = [1, 2, 3];
  let obj = {
    name: 'Bob',
    age: 20
  };
  
  console.dir(UserInfo); // 함수
  console.dir(arr);      // 배열
  console.dir(obj);      // 객체

  console.log('-------------------------------------------------------------------')
  console.log('-------------------------------------------------------------------')
  console.log('-------------------------------------------------------------------')
  console.log('-------------------------------------------------------------------')


function UserInfo1(name, age) {
    this.name = name;
    this.age = age;
  }
  
  var obj1 = new UserInfo1('Bob', 20)
  
  console.dir(UserInfo1);
  console.dir(obj1);

  console.log('-------------------------------------------------------------------')
  console.log('-------------------------------------------------------------------')
  console.log('-------------------------------------------------------------------')
  console.log('-------------------------------------------------------------------')



  function UserInfo2(name, age) {
    this.name = name;
    this.age = age;
  }
  
  var obj2 = new UserInfo2('Bob', 20)
  
  // 호출할 때는 [[Prototype]]가 아닌 __proto__로 호출합니다.
  console.dir(obj2.__proto__.constructor);

console.log(UserInfo2.prototype === obj2.__proto__)
console.log(obj2.__proto__.constructor === UserInfo2.prototype.constructor);
// => 생성자 함수의 prototype 프로퍼티는 이 생성자 함수로 만들어낼 객체가 가질게될 [[prototype]]이다.