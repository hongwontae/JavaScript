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
