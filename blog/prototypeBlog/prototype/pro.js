function Friend(name) {
    this.name = name;
}
  
  Friend.prototype.introduce = () => {
    return `안녕하세요. ${this.name}입니다!`
  }
  
  const friend1 = new Friend('짱구');
  const friend2 = new Friend('철수');
  
  console.log(friend1.introduce === friend2.introduce); 
  // true
console.log(Friend === friend1.constructor)

console.log(Friend.prototype);
console.log(friend1);
console.log(friend2);

console.log('----------------------------------------------------------------')

const obj = {};
const parent = { x: 1 };

// getter 함수가 호출되어 객체의 프로토타입 얻음
console.log(obj.__proto__); // [Object: null prototype] {}

// setter 함수가 호출되어 객체의 프로토타입 교체
obj.__proto__ = parent;

console.log(obj.__proto__); // { x: 1 }
console.log(obj.x); // 1