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

async function foo(){
    return 1;
}

function bar(){
    return Promise.resolve(1);
}

console.dir(foo);
console.dir(bar);

console.dir(foo());
console.dir(bar());

foo().then(data => {console.log(data)});
bar().then(data => {console.log(data)});



function resolveAfter2Seconds() {
    console.log('start slow promise.');
    return new Promise((resolve) => {
        setTimeout(function () {
            resolve(20);
            console.log('slow promise is done.');
        }, 2000);
    });
};


function resolveAfter1Second() {
    console.log('start fast promise.');
    return new Promise((resolve) => {
        setTimeout(function () {
            resolve(10);
            console.log('fast promise is done.');
        }, 1000);
    });
};