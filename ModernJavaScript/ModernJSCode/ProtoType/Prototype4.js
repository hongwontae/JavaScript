function UserInfo(name, age) {
    this.name = name;
    this.age = age;
  }
  
  var user = new UserInfo('Bob', 20);
  
  console.log(user.hasOwnProperty('name'));
  console.dir(UserInfo.prototype);
  console.dir(UserInfo)
  console.dir(user);


Object.prototype.hello = function() {
    console.log('hello~');
  }
  
  var arr = [];
  var obj = {};
  var num = new Number(10);
  
  arr.hello(); // hello~
  obj.hello(); // hello~
  num.hello(); // hello~
  console.dir(Object.prototype);
  console.dir(Object)