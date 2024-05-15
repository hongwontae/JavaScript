// Object.assign();
let a = {
    name : 'HWT',
    age : 10000
}

let objCopy = Object.assign({year : 2000},a);
console.log(objCopy);
console.log(a === objCopy);


// Object.keys();
let a1 = {
    name : 'hwt',
    age :27,
}

console.log(Object.keys(a1));


// Object.freeze();
let a2 = {
    name : 'hwt',
    age : 101010
};

Object.freeze(a2);
a2.age = '222';
delete a2.age;
console.log(a2); // 바꾸거나 삭제가 불가능해졌다.
console.log(Object.isFrozen(a2)) // true freeze 증명


// Object.seal();
let a3 = {
    name : 'hwt',
    age : 202020
};
Object.seal(a3);
delete a3.name;
a3.name = undefined
console.log(a3); // 변경은 가능, 삭제는 불가능


//Object.getPrototypeOf();
const date = Object.getPrototypeOf(new Date());
console.dir(date);


// hasOwnProperty();
function plus(name){
    this.name = name;
};

plus.prototype.add = 10;

const pp = new plus('HWT');
console.dir(pp);
console.log(pp.hasOwnProperty('name'))
console.log(pp.hasOwnProperty('add'));






