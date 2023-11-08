function Person(name,age){
    this.name = name;
    this.age = age;
}

Person.prototype.introduce = function(){
    return `안녕하세요 제 이름은 ${this.name}이고 나이는 ${this.age}입니다.`
} // prototype의 메서드 내의 this는 항상 호출하는 객체를 참조한다.

let person = new Person('HWT',30);
console.dir(person.introduce());

class Person1{
    constructor(name,age){
        this.name = name;
        this.age = age;
        console.log(this);
    }

    introduce(){
        return `이름 : ${this.name} 나이 : ${this.age}`
    }
    getting(){
        this.good = 'HWT';
    }

    height = 10000;

    oooo = function(){
        return 'zlatna'
    } // 인스턴스 객체로 들어간다. prototype이 아닌..
    
}

let person2 = new Person1('HWT',3000);
let person3 = new Person1('AJY',4000);

person2.getting();