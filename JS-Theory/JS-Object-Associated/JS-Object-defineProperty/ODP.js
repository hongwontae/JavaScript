const person = {
    name : 'HWT',
    age : 80
};
console.log(person)

Object.defineProperty(person, 'ko', {
    get(){
        return this.name
    },
    set(value){
        this.name = value
    }
})

person.ko = 'Alonso';
console.log(person);

const ast = {
    age : 1000,
    goodBoy(){
        console.log(this.age);
    }
}

Object.defineProperty(ast, 'goodBoy', {
    get(){
       return 10
    }
});

const a = ast.goodBoy;
console.log(a);



