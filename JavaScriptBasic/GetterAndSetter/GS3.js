let person = {
    name : 'hwt',
    age : 500,

    get printGet(){
        return `내 이름은 ${this.name}이고 나이는 ${this.age}입니다.`;
    },

    set printSet(personInfo){
        let person = personInfo;
        this.name = person;
    }
}

person.printSet = 'HWT'; // Setter
console.log(person.name);

console.log(person.printGet); // Getter
