// function increaseAndPrint(n, callback) {
//     setTimeout(() => {
//       const increased = n + 1;
//       console.log(increased);
//       if (callback) {
//         callback(increased);
//       }
//     }, 1000);
//   }
  
//   increaseAndPrint(0, n => {
//     increaseAndPrint(n, n => {
//       increaseAndPrint(n, n => {
//         increaseAndPrint(n, n => {
//           increaseAndPrint(n, n => {
//             console.log('끝!');
//           });
//         });
//       });
//     });
//   }); 

// let myPromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve('Done');
//   },3000)
// });
// // myPromise는 setTimeout의 함수가 실행되었을 떄 프로미스를 반환하는 변수이다.



// console.log(myPromise);

// setTimeout(() => {
//   console.log(myPromise);
// },3000)

// let a = Promise.resolve('Done');
// console.log(a);

// let b = new Promise((resolve, reject) => {
//   resolve('Done')
// })
// console.log(b);

// // let c = new Math();
// // console.log(c);
// // => 불가능하다.
// // let c = new JSON();
// // console.log(c);
// console.dir(Math);
// console.dir(String.constructor)
// console.dir(Promise)
// console.dir(window.Document);

// let a1 = document.createElement('div');
// let a2 = document.createAttribute('button');
// console.dir(a1);

// function Adding(name, age){
//   this.name = name;
//   this.age = age;
// }

// let person =  new Adding('hwt',20);
// console.dir(Adding);
// console.log(person);

// console.dir(document);
// console.dir(String);



