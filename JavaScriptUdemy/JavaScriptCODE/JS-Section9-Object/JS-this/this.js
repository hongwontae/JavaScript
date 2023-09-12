	
function foo() {
    console.log(this.age);
  }

  let age = 100;

  let ken = {
    age: 36,
    foo: foo
  }

  let wan = {
    age: 32,
    foo: foo
  }

  ken.foo();  // 36
  wan.foo();  // 32
   
  let fn = ken.foo;

  fn();	// 100