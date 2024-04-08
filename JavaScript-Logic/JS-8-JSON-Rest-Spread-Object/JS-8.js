let a = {
    name : 'JWT',
    age : 3000,
    year : 2024
}
// Object.keys(obj) => key name arr을 반환한다.
let obj1 = Object.keys(a);
console.log(obj1);

// Object.values(obj) => obj의 values을 반환한다.
let obj2 = Object.values(a);
console.log(obj2);

// Object.entries(obj)
let obj3 = Object.entries(a);
console.log(obj3);

// Object.fromEntries(arr) => 이중 arr를 객체로 변환한다. entries와 연계하여 사용한다.
let obj4 = Object.fromEntries(obj3);
console.log(obj4)

// => 3개면 마지막 하나 버린다.
let obj5 = Object.fromEntries([['www','kkk','sss'],['hwt','hwt','kkk']]);
console.log(obj5)


// JSON
const todos = [
    {id: 1, content: 'HTML', completed: false},
    {id: 2, content: 'CSS', completed: true},
    {id: 3, content: 'JS', completed: false}
  ]
let j1 = JSON.stringify(todos);
console.log(`${j1} and ${typeof j1}`);

let j2 = JSON.parse(j1);
console.log(`${j2} and ${typeof j2}`)
console.dir(j2);


// rest
function f1(a,b,...c){
    return c
}

let f2 = f1(1,2,3,4,5,6,7,7);
console.log(f2)

let [z1,z2,...z3] = [1,2,3,4,5]
console.log(z3)


// spread
let stat1 = [1,10,40,100];
let stat2 = [...stat1];
console.log(stat2);
console.log(stat1 == stat2);


// 구조분해
let [a1,a2,...a3] = [1,2,3,4,5,];
console.log(a1);
console.log(a2);
console.log(a3)

let {striker, triple, ...props} = {striker : 'sss', triple : 'trieple', 'center' : '?dd', ccccc : 'zzzzz 플립'}
console.log(striker)
console.log(props)
