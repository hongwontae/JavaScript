var x = 10;

function foo(){
  var x = 100;
  console.log(x); // 100

  function bar(){   
    x = 1000;
    console.log(x); // 1000
  }

  bar(); // 100
}
foo(); // 100/1000
console.log(x); //10


console.log('----------------------------------------')
