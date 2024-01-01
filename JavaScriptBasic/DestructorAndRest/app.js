// // let a = [1,2,3,4,5];
// // let [a1=100,a2,...a3] = a;
// // console.log(a1);
// // console.log(a2);
// // console.log(a3);

// // let b = {title:'hwt', age: 20, ClassRoom: 10};
// // let {title,age:age2 = 10,ClassRoom} = b;
// // console.log(title);
// // console.log(age2);
// // console.log(ClassRoom);

// // function add({age,ClassRoom,}){
// //     return age+ClassRoom
// // }

// // console.log(add(b));

// let c = [1,2,3];
// let [c1,c2] = c;
// console.log(c1);


// // => RestParameter로 복사한 값은 새로운 참조값을 갖는다.

// let d = 1;

// function add1(...d){ // 함수의 매개변수의 ...은 목록을 배열로 만든다.
//     console.log(d) // => 값은 d = [1,2,3]
// }

// add1(d);
// // 함수 호출 ...은 배열을 목록을 만들어준다.

// let obj1 = {
//     name1 : 'hwt',
//     age2 : 300,
//     cla : '10'
// };

// let obj2 = {
//     ...obj1
// };
// console.log(obj2);
// console.log(obj1 === obj2)


let object1 = {names:'hwt', ages:300000}

let cool = {...object1};

let {...props} = cool
console.log(cool)

let arr1 = [1,2,3];
let coo2 = [...arr1];
console.log(coo2);
let [...kk] = coo2;
console.log(kk)

let a1 = {aa:'aa', bb:'bb'}
let a2 = [1,2,3]

let a = (...AKA)=>{
    console.log(...AKA)
}
a(a1);

let b = (...AKA)=>{
    console.log(AKA)
}

b(a2)



