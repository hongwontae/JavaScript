let user = {
  firstName: "보라",
  sayHi() {
    let arrow = function () {
      console.log(this.firstName);
      arrow();
    };
  },
}; // arrow()의 this는? 없다.

user.sayHi(); // 보라


let user2 = {
    firstName: "보라",
    sayHi() {
      let arrow = () => console.log(this.firstName);
      arrow();
    }
  };
  
  user2.sayHi(); // 보라


const a = {"Ali song" : 'GoalKeeper', age : 30};
a["Ali song"] = '골키퍼';
console.log(a["Ali song"]); // 대괄호 표기법을 통해서 프로퍼티에 접근하는 방법


function show(name, age){
  return {name, age}
};

let a1 = show('hwt',30);
console.log(a1); // 객체의 키, 값이 동일한 이름이라면 하나만 작성해도 된다.


console.log("name" in a1); // true => name이라는 키가 a1객체에 존재하는가?


let a3 = {name : 'jwt', process : 'good', year : 2023};

for(const loop in a3){
  console.log(loop);
  console.log(a3[loop])
} // 대괄호 표기법을 사용한 for-in 반복문

let a4 = Object.assign(a1,a3);
console.log(a4); // Object.assing을 활용한 얕은 복사 구문


// 생성자 함수의 new
// new의 로직
// 1. this에 {}빈 객체를 할당한다.
// 2. 함수 본문을 실행하여 this에 새로운 프로퍼티를 추가한다.
// 3. this를 return한다.
// return으로 새로운 객체를 반환하면 그 객체만 return되고 기존의 this는 반환되지 않는다.
// return 원시값을 경우 아예 반환를 하지 않는다.


// .? => 왼쪽 평가대상이 null이나 undefined라면 평가를 멈추고 undefined를 반환한다.

console.log(a4?.name);
