class Parents{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    good(){
        console.log('HWT')
    }

}

class Child extends Parents{
    constructor(name,age){
        super(name,age);
    }
    insMethod(){
        return super.good();
}
}

let child = new Child('HWT',3000);
console.log(child);
child.insMethod();
console.dir(Parents)