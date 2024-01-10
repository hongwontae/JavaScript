// let object1 = {names:'hwt', ages:300000}

// let cool = {...object1};

// let {...props} = cool
// console.log(cool)

// let arr1 = [1,2,3];
// let coo2 = [...arr1];
// console.log(coo2);
// let [...kk] = coo2;
// console.log(kk)

// let a1 = {aa:'aa', bb:'bb'}
// let a2 = [1,2,3]

// let a = (...AKA)=>{
//     console.log(...AKA)
// }
// a(a1);

// let b = (...AKA)=>{
//     console.log(AKA)
// }

// b(a2)

// console.log('Basic ... ////////////////////////////////////////////////////////////////')
// console.log('Basic ... ////////////////////////////////////////////////////////////////')
// console.log('Basic ... ////////////////////////////////////////////////////////////////')


// let sex = [[1,2,3],[4,5,6],[7,8,9]]

// let sex1 = [...sex];
// console.log(sex1);

// let sex2 = {...sex}
// console.log(sex2);

// let sex3 = [[1,2],[3,4],[5,6]];

// let sex4 = sex3.map(data => [...data])
// console.dir(sex4)

const app = {name : 'hwt', age : 3000};
const {...props} = app;
console.log(props)

let a = {...props}
console.log(a);




