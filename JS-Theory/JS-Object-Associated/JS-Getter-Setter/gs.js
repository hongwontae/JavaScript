const user = {
  name: "Umpa",
  age: 50,

  // userName() 메서드 왼쪽에 get, set 키워드만 붙이면 알아서 Getter, Setter 로서 동작된다
  get userName() {
    return user.name;
  },
  set users(value) {
    user.name = value;
  },

  get userAge() {
    return user.age;
  },
  set userAge(value) {
    if (value >= 10) {
      console.log("9살 이상 부터 불가능");
      return;
    }
    user.age = value;
  },
};

user.userAge = 200;
console.log(user);

