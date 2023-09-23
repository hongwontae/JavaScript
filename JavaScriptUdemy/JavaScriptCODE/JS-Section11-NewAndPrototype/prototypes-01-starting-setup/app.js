class Person{
    name = 'Max';

    constructor(){
        this.age = 30;
    }

    greet(){
        console.log(`Hi i am ${this.name} and i am ${this.age}`)
    }
}

function Person2(){
    this.age = 30;
    this.name = 'Max';
    this.greet = function(){
        console.log(`Hi My name is ${this.name}`)
    }
}

const person = new Person();
person.greet();

const person2 = new Person2();
person2.greet(); // 클래스는 이면에서는 함수로 이루어져 있다.

console.log('----------------------프로토타입 완벽 공략-------------------------------------')