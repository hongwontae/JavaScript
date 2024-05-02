class team{
    teamPlayer;
    MOTM;

    constructor(teamPlayer, MOTM){
    this.teamPlayer = teamPlayer;
    this.MOTM = MOTM;
    //console.log(this.name);
    // super()실행되면 extends된 생성자가 실행된다. 그 클래스 내부에는 name이라는 프로퍼티가 존재하지 않는다.
    }
}

class Person extends team{
    name = 'hwt';
    age;

    constructor(name, age){
        super('Gomez','Gomez');
        this.name = name;
        this.age = age;
    }

    greet(){
        console.log(`name is ${this.name}, age is ${this.age}, teamPlayer is ${this.teamPlayer}, MOTM is ${this.MOTM}`)
    }
}

const p = new Person('홍원태',20);
console.log(p.name);
console.log(p.age);
console.log(p.MOTM)
console.log(p.teamPlayer);

console.log(p);
