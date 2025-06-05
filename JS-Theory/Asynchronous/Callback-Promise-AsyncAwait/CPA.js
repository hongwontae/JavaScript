// function firstTask(){
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             console.log('First Task');
//             resolve('Hello!');
//         },3000);
//     });
// };

// firstTask().then((data)=>{
//     console.log(data);
// }).finally(()=>{
//     console.log('Finally')
// })

// console.log(firstTask().then(data => console.log(data)));

// console.dir(Promise)

function one(){
    return new Promise((resovle, reject)=>{
        let success = true;
        if(success){
            resovle('SSS');
            console.log('if success');
        }
    })
}

async function add(){
    const a = await one();
    console.log(a);
}

add();
console.log('lasting111');




// async function add2(){
//     console.log('add2+')
//     const res = await Promise.resolve('Promise.!!');
//     console.log(res);
//     console.log('add2-')
// }

// console.log('1111111111111')
// add2();
// console.log('2222222222222')
// console.log('2222222222222')
// console.log('2222222222222')
// console.log('2222222222222');

// function print(a){
//     console.log(a);
// }

// function add(a,b,cb){
//     let all = a+b;
//     cb(all);
// };

// add(1,3,print);

// console.log('Hello!');

// function submit(){
//     return new Promise((resolve, reject)=>{

//     })
// }

let kkk = new Promise((resolve)=>{
    resolve('5')
});
kkk.then(data => console.log(data));

