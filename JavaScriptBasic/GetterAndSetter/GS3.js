// let person = {
//     name : 'hwt',
//     age : 500,

//     get printGet(){
//         return `내 이름은 ${this.name}이고 나이는 ${this.age}입니다.`;
//     },

//     set printSet(personInfo){
//         let person = personInfo;
//         this.name = person;
//     }
// }

// person.printSet = 'HWT'; // Setter
// console.log(person.name);

// console.log(person.printGet); // Getter


// let show = {
//     name : 'hwt',
//     name(){
//         console.log('good shot');
//     }
// }

// console.log(show.name);

class Public {
    //생성자 역할을 하는 constructor
	constructor(name,age,gender){
    	this.name = name;
        this.age = age;
        this.gender = gender;
    }
    
    //getter
    get age(){
    	return this._age;
    }
    
    //setter : class내 속성 값의 제한을 두어야 하는 경우 자주 사용
    set age(value){
    	if(value > 0 && value < 150){
    		this._age = value;
        }
    }
    
    //method 
	Print(){
    	console.log('이름 : ' + this.name + '  나이 : ' + this._age);
    }
}

let per1 = new Public('철수',20,'남');
let per2 = new Public('영희',30,'여');

per1.Print();
console.log(per1.age);