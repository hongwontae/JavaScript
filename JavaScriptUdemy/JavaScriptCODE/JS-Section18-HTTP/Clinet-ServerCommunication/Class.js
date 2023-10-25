class Orange{
    //class 정적 프로퍼티 추가 
   static weight = 100;
   static description ="I'm an Orange";
   //static 메서드 추가 
   static joke(){
    console.log("Orange를 먹은지 얼마나 오랜지");
   } 
  }
   
  class SpainOrange extends Orange{
    static location ='spain';
    static joke(){
      super.joke();
      console.log("I'm a spainOrange, Ha, Ha, Ha");
    }
  }
   
  //static property 출력 
  console.log(Orange.weight); //100
  //static method 출력
  console.log(Orange.joke()); //Orange를 먹은지 얼마나 오랜지
  //static property 출력
  console.log(SpainOrange.location); //spain
  //static method 출력
  console.log(SpainOrange.joke());//Orange를 먹은지 얼마나 오랜지


   
  const orange = new Orange();

  console.dir(Orange);
  console.dir(SpainOrange);
  console.dir(orange);


class Person{
    constructor(){
        this.name  = 'hwt'
        this.age = 300
        this.team = 'PSG'
    }
    call = function(){
        console.log('Stop Me')
    }
    look = 'kook'
}

Person.prototype.kkk = ()=>{
    console.log('Stop')
}

console.dir(Person)

let person = new Person();
console.dir(person);
person.kkk();




// function Add(age, name){
//     this.age = age;
//     this.name = name;
//     this.cool = 'good'
// }


// let add = new Add(20, '300');
// console.log(add);
// console.dir(Add)
// console.log(add.constructor === Add)
// console.log(typeof add.constructor)

