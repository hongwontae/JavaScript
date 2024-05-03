class Person{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    static classRome = '10van';

    show(){
        this.star ='BEO'
    }

    static hide(some){
        return `제 이름은 ${some}입니다.`
    }

}

let person = new Person('HWT',27);
console.log(person);
console.log(Person.hide('ss'))
console.log(Person.classRome)

class parents{
    constructor(){
        this.name1 = 'aaa';
        this.name2 = 'bbb';
    }
    static use = 'Good';
    static ko(name){
        return `My name is ${name}`
    }
    height = 10000;
    instancMethod(){
        return '이것은 아니야'
    }
}

class Children extends parents{

    constructor(){
        super();
    }

}

let child = new Children();
console.dir(child);
console.log(child.height);
console.log(child.instancMethod());
console.log(Children.ko('HWT'));
console.log(Children.use);

class SuperPerson{
    constructor(name, age){
        this.name = name;
        this.age = age;
        this.ko = function(args){
            return `${args}who?`
        }
    }
    sum(one, two){
        return (one+two);
    }
    height = 100000;
    static sex = 'good sex'
    static lng = ()=>{
        return console.log(1)
    }
    multiple(){
        console.log('not!!')
    }
}

class SuperPerson2 extends SuperPerson{
    constructor(name,age){
        super(name,age)
        this.party = 'Good Party'
    }
    sum(one1, two1){
        return super.sum(one1,two1)
    }
    height = '10000'
    // static sex = 'Bad Sex'
    // static lng = ()=>{
    //     console.log(1000)
    // }
    goAle(){
        return super.multiple();
    }
    static gogo(){
        return super.lng();
    }
}

let sp2 = new SuperPerson2('HWT',3000);
console.log(sp2);
SuperPerson2.gogo();
