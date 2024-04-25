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

async function add(){
    const a = await 2;
    console.log(a);
}

add();
console.log('lasting111')

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
// console.log('2222222222222')

