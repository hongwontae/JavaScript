let animal = {
    eats: true,
    walk() {
      console.log("동물이 걷습니다.");
    }
  };
  
  let rabbit = {
    jumps: true,
    __proto__: animal
  }; // rablt의 프로토타입에 animal객체를 주었다. => 프로토타입 상속
     // rablt의 animal객체는 상속 프로퍼티라고 불린다.
  
  // 메서드 walk는 rabbit의 프로토타입인 animal에서 상속받았습니다.
  rabbit.walk(); // 동물이 걷습니다.

console.log('---------------------------------------------------------------------')
console.log('---------------------------------------------------------------------')
console.log('---------------------------------------------------------------------')
console.log('---------------------------------------------------------------------')


let animal2 = {
    eats: true,
    walk() {
      console.log('토끼는 거북에게 집니다.')
      console.log('Alonse')
    }
  };
  
  let rabbit2 = {
    __proto__: animal2
  };
  
//   rabbit2.walk = function() {
//     console.log("토끼가 깡충깡충 뜁니다.");
//   };
// => 프로토타입을 상속받은 객체에서 프로토타입을 수정하면 프로토타입을 수정하라는 로직으로 알아먹지 못한다.
// => 일반 walk 메서드를 생성하고 실행시 이를 우선적으로 실행한다.
  
rabbit2.walk(); // 토끼가 깡충깡충 뜁니다. or 토끼는 거북에게 집니다.
console.log(animal2);
console.log(rabbit2);


console.log('---------------------------------------------------------------------')
console.log('---------------------------------------------------------------------')
console.log('---------------------------------------------------------------------')
console.log('---------------------------------------------------------------------')


let user = {
    name: "John",
    surname: "Smith",
  
    set fullName(value) {
      [this.name, this.surname] = value.split(" ");
    },
  
    get fullName() {
      return `${this.name} ${this.surname}`;
    }
  };
  
  let admin = {
    __proto__: user,
    isAdmin: true
  };
  
  console.log(admin.fullName); // John Smith (*)
  
  // setter 함수가 실행됩니다!
  admin.fullName = "Alice Cooper"; // (**)
  
  console.log(admin.fullName); // Alice Cooper, setter에 의해 추가된 admin의 프로퍼티(name, surname)에서 값을 가져옴
  console.log(user.fullName); // John Smith, 본래 user에 있었던 프로퍼티 값