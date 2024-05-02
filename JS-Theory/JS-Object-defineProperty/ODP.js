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
console.log(person)
