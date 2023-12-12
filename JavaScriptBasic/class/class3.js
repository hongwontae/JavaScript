const products = [];

class Person {
    constructor(title,age){
        this.title = title;
        this.age = age
    }

    save(){
        products.push(this);
        console.log(this);
        console.log(products)
    }

}

const person1 = new Person('HWT',3000);
const person2 = new Person('HWT',3000);
const person3 = new Person('HWT',3000);
person1.save();
person2.save();
person3.save();
console.log(person1.save)