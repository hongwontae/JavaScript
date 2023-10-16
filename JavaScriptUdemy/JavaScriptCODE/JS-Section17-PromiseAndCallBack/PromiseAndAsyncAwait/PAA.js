// findUserAndCallBack(1, function (user) {
//   console.log("user:", user);
// });

// function findUserAndCallBack(id, cb) {
//   setTimeout(function () {
//     console.log("waited 0.1 sec.");
//     const user = {
//       id: id,
//       name: "User" + id,
//       email: id + "@test.com",
//     };
//     cb(user);
//   }, 100);
//   console.log("CallBack Time");
// }

// async function foo() {
//   return 1;
// }

// function bar() {
//   return Promise.resolve(1);
// }

// console.dir(foo);
// console.dir(bar);

// console.dir(foo());
// console.dir(bar());

// foo().then((data) => {
//   console.log(data);
// });
// bar().then((data) => {
//   console.log(data);
// });


// async await Question
function resolveAfter2Seconds() {
  console.log("start slow promise.");
  return new Promise((resolve) => {
    setTimeout(function () {
      resolve(20);
      console.log("slow promise is done.");
    }, 2000);
  });
}

function resolveAfter1Second() {
  console.log("start fast promise.");
  return new Promise((resolve) => {
    setTimeout(function () {
      resolve(10);
      console.log("fast promise is done.");
    }, 1000);
  });
}

// (1)
async function sequentialStart() {
  const slow = await resolveAfter2Seconds();
  console.log(slow); 

  const fast = await resolveAfter1Second();
  console.log(fast); 
}

// sequentialStart();
// async 함수는 Promise 객체를 반환한다.
// 1. start slow promise
// 2. slow promise is done
// 3. 20
// 4. start fast promise
// 5. fast promise is done
// 6. 10



// (2)
async function concurrentStart() {
  const slow = resolveAfter2Seconds();
  const fast = resolveAfter1Second();

  console.log(await slow);
  console.log(await fast);
}

concurrentStart();
// 1. start slow promise
// 2. start fast promise
// 3.


// // (3)
// function stillConcurrent() {
//   Promise.all([resolveAfter2Seconds(), resolveAfter1Second()]).then(
//     (results) => {
//       console.log(results[0]); // slow
//       console.log(results[1]); // fast
//     }
//   );
// }

// // (4)
// function parallel() {
//   resolveAfter2Seconds().then((result) => console.log(result));
//   resolveAfter1Second().then((result) => console.log(result));
// }
