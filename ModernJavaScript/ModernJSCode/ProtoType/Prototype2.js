// animal엔 다양한 메서드가 있습니다.
let animal = {
    walk() {
      if (!this.isSleeping) {
        console.log(`동물이 걸어갑니다.`);
      }
    },
    sleep() {
      this.isSleeping = true;
    }
  };
  
  let rabbit = {
    name: "하얀 토끼",
    __proto__: animal
  };
  
  // rabbit에 새로운 프로퍼티 isSleeping을 추가하고 그 값을 true로 변경합니다.
  rabbit.sleep();
  
  console.log(rabbit.isSleeping); // true
  // rablit에서 sleep()메서드를 호출했다. this는 rabbit의 프로퍼티를 가르키고 없으니까 isSleeping이라는 키 true라는 값으로 객체가 구성된다.
  console.log(animal.isSleeping); // undefined (프로토타입에는 isSleeping이라는 프로퍼티가 없습니다.)
  // animal 자체에는 isSleeping이라는 프로퍼티가 존재하지 않는다.
  console.log(animal);
  console.log(rabbit);


console.log('---------------------------------------------------------')
console.log('---------------------------------------------------------')
console.log('---------------------------------------------------------')
console.log('---------------------------------------------------------')

let animal2 = {
    eats: true
  };
  
  let rabbit2 = {
    jumps: true,
    __proto__: animal2
  };
  
  // Object.keys는 객체 자신의 키만 반환합니다.
  console.log(Object.keys(rabbit2)); // jumps
  
  // for..in은 객체 자신의 키와 상속 프로퍼티의 키 모두를 순회합니다.
  for(let prop in rabbit2){
    console.log(prop);
  } // jumps, eats

console.log('---------------------------------------------------------')
console.log('---------------------------------------------------------')
console.log('---------------------------------------------------------')
console.log('---------------------------------------------------------')


  let animal3 = {
    eats: true
  };
  
  let rabbit3 = {
    jumps: true,
    __proto__: animal3
  };

  console.log(animal3);
  console.log(rabbit3);
  
  for(let prop in rabbit3) {
    let isOwn = rabbit3.hasOwnProperty(prop);
  
    if (isOwn) {
      console.log(`객체 자신의 프로퍼티: ${prop}`); // 객체 자신의 프로퍼티: jumps
    } else {
      console.log(`상속 프로퍼티: ${prop}`); // 상속 프로퍼티: eats
    }
  }