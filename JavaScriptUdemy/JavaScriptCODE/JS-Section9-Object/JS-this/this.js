function func() {
  console.log(this);
}

func();

console.log(this);
// 둘 다 window 객체를 반환한다.
// 일반 함수로 호출하거나 this를 생으로 불렀을 떄는 window객체를 반환한다.


// 암시적 바인딩
console.log('암시적 바인딩')
const obj = {
  name: 'timegambit',
  sayName() {
    console.log(this.name);
  },
};

obj.sayName(); // timegambit
// sayname의 메서드의 this는 메서드를 호출한 객체을 따라간다. name => timegambit
// 누가 호출했는지가 중요하다.


// 명시적 바인딩 
console.log('명시적 바인딩')
function sayName1(a, b) {
  console.log(this.name, a, b);
}

const obj1 = {
  name: 'timegambit',
};

sayName1.call(obj1, 1, 2); // timegambit 1 2
// sayName1의 this는 obj1를 참조하라 => call(obj1)이 이를 일으킨다. 1,2는 함수의 인자로 들어간다.

function sayName2(a, b) {
  console.log(this.name, a, b);
}

const obj2 = {
  name: 'timegambit',
};

sayName2.apply(obj2, [1, 2]); // timegambit 1 2
// 위와 같다. 다만 인자를 배열로 받아서 해당 함수의 매개변수로 사용한다.

function sayName3(a, b) {
  console.log(this.name, a, b);
}

const obj3 = {
  name: 'timegambit',
};

const bound = sayName3.bind(obj3, 1);
bound(3); // timegambit 1 2
// 함수를 바로 실행시키는 것이 아니라 bind()를 대입받은 변수가 함수를 갖게 된다.
// this는 obj3를 참조하고 매개변수로 1과 3을 받는다. bind() 두 번쨰 인자부터 다 넣어도 되고,
// bind()를 받은 bound()에 인자를 줘도 된다. 그래서 1,3이 출력된다.