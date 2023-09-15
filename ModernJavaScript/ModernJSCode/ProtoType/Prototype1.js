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
    }
  };
  
  let rabbit2 = {
    __proto__: animal2
  };
  
//   rabbit2.walk = function() {
//     console.log("토끼가 깡충깡충 뜁니다.");
//   };
  
  rabbit2.walk(); // 토끼가 깡충깡충 뜁니다.
console.log(animal2);
console.log(rabbit2);