class Parents{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    height = '10000';
}

class Child extends Parents{
    constructor(name,age){
        super(name,age);
    }
}

let child = new Child('HWT',3000);
console.log(child);