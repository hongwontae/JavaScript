let student = {
    name : 'kkk',
    class : 7
}

function Add(name, age){
    this.name = name;
    this.age = age;
};

const add = new Add('HWT',27);
const cool = new Add.prototype.constructor('Name',30);
console.log(cool);


let killing = {
    lll : 'lll',
    kkk : 'kkk'
}

console.log(killing.__proto__ === Object.prototype); // true
console.log(killing.__proto__.hasOwnProperty === Object.prototype.hasOwnProperty);

