let a = {
  myName: "HWT",
  func: function () {
    console.log(this);
    console.log(this.myName);
  },
};

a.func();

let b = {
  myName: "bbbb",
  ffff: function () {},
};

b.ffff = a.func;

b.ffff();
console.dir(b.ffff);

console.log("명시적 바인딩");

function thisBi(kkk) {
  console.log(this);
  console.log(kkk);
}

thisBi();

let fnUp = thisBi.bind({ hwt: "HWT" });
fnUp();
console.dir(fnUp);

function fn1(a) {
  console.log(this);
  console.log(a);
}

let fn1Up = fn1.call({ kkk: "JWT" }, [1, 2, 3]);

console.log("Arrow Func this");

function aaa() {
  let abc = () => {
    console.log(this);
  };
  abc();
}

let a222 = aaa.bind({nice : 'Ksep RAmA'});
a222();