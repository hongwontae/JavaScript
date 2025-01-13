// producer
const promise = new Promise((resolve, reject) => {
    // netWork, read Files.. doing sime heavy work;
    console.log('doing something');
    setTimeout(()=>{
        reject(new Error('new Error'));
    },2000)
});

// consumers : then, catch, finally
promise.then(value => {
    console.log(value);
}).catch(error => {
    console.log(error)
}).finally(() => {
    console.log('finally')
})

// then => promise가 올바르게 실행되어서 pending => fulfilled가 되어서 resolve 콜백함수의 값이 담기는 것이다.
// catch => 모종의 이유로 error가 발생하여 그 오류를 처리하고 싶을 떄는 catch 메서드나 then의 두 번쨰 매개변수에 처리한다.

// const fetchNumber = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve(1)
//     }, 1000);
// })

// fetchNumber.then(num => num*2)
//  .then(num => num*3)
//  .then(num => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(num-1)
//         }, 1000)
//     })
//  })
//   .then(num => console.log(num));

// const femi = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("HWT");
//     //console.dir(resolve())
//     console.log("hhwt");
//   }, 1000);
// });

// femi.then((data) => console.log(data));


// async function data() {
//   const data = await fetch("http://localhost:8080/events");
  
//   console.log(data)
//   console.dir(data)
// }

// const prom1 = new Promise((resolve, reject)=>{
//   if(20>10){
//     resolve('good game')
//   }
// })

// console.dir(prom1)
// console.log(prom1)
// prom1.then((a)=>{console.log(a)})


async function goodgame(){
  const response = await fetch("http://localhost:8080/events");
  // console.log(response);
  return response;
}

console.log(goodgame());


