let a = [1,2,3,4,5,6,7];
let a1 = a.splice(1,2,'new');
console.log(a);
// splice는 기존의 배열을 조작한다.
// splice의 반환값은 제거된 값들이다.

let a2 = [1,2,3,4,5];
a2.splice(-3,3,'그대여 아무 걱정하지 말아요');
console.log(a2);
// splice의 음수로직은 뒤의 길이로직으로 3번쨰 값부터 3,4,5를 삭제하고 3번쨰 인자를 추가한다.


let a3 = [1,2,3,4,5,6,7];
let a4 = a3.slice(1,3);
let a5 = a3.slice(2);
console.log(a4);
console.log(a5);
// slice의 로직은 복사하여 얕은복사를 만드는 것이다.
// 인자에 따라 로직이 조금씩 달라진다.
// 인자에 아무것도 넣지 않으면 전체 복사한다.
// 인자에 하나만 넣으면 해당 인덱스부터 끝까지 복사한다.
// 인자에 두 개를 넣으면 첫 번쨰 인자의 인덱스부터 두 번쨰 인자의 길이까지 복사한다.


let b = Array.isArray([]);
console.log(b);

let b1 = typeof [];
console.log(b1);
// typeof로는 해당 변수가 배열인지 아닌지를 알 수가 없다.
// Array.isArray()의 메서드를 통해 해당 변수가 배열인지 아닌지를 Boolean 값으로 나타낼수 있게 한다.


// Iterable 객체

// let range = {
//     from: 1,
//     to: 5
//   };
  
//   // 1. for..of 최초 호출 시, Symbol.iterator가 호출됩니다.
//   range[Symbol.iterator] = function() {
  
//     // Symbol.iterator는 이터레이터 객체를 반환합니다.
//     // 2. 이후 for..of는 반환된 이터레이터 객체만을 대상으로 동작하는데, 이때 다음 값도 정해집니다.
//     return {
//       current: this.from,
//       last: this.to,
  
//       // 3. for..of 반복문에 의해 반복마다 next()가 호출됩니다.
//       next() {
//         // 4. next()는 값을 객체 {done:.., value :...}형태로 반환해야 합니다.
//         if (this.current <= this.last) {
//           return { done: false, value: this.current++ };
//         } else {
//           return { done: true };
//         }
//       }
//     };
//   };
  
//   // 이제 의도한 대로 동작합니다!
//   for (let num of range) {
//     console.log(num); // 1, then 2, 3, 4, 5
//   }

let range = {
    from: 1,
    to: 5,
  
    [Symbol.iterator]() {
      this.current = this.from;
      return this;
    },
  
    next() {
      if (this.current <= this.to) {
        return { done: false, value: this.current++ };
      } else {
        return { done: true };
      }
    }
  };
  
  for (let num of range) {
    console.log(num); // 1, then 2, 3, 4, 5
  }