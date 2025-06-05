console.log('일반 함수 내에서의 this')
function whatThis(){
    // 'use strict'
    console.log(this);
}

whatThis();

// 엄격모드일 떄는 undefined, 그렇지 않을 경우 window 전역 객체를 바라본다.



console.log('생성자함수..............................................................')

function Person(){
    this.name = 'sunny';
    this.showThis = function(){
        console.log(this);
    }
}

let me = new Person();
me.showThis();
console.log(me);
console.dir(Person);

let aaa = {name : 'hwt', age : 399}
console.log(aaa);
// => 객체 리터럴, 생성자 함수 객체의 console.log()는 다르다. 생성자 함수로 만든 객체는 생성자 함수 이름이 앞에 붙어있고 객체
// 리터럴은 그렇지 않다.


console.log('메서드의 this')

var myName = 'HONG';

function callMe(){
    console.log(this.myName);
    console.log(this)
};

let obj = {
    myName : 'HWT Vampaire',
    func : callMe
};

callMe();
obj.func();
// => 메서드 내의 this는 호출한 객체를 바라보고 호출한 시점에 this의 값이 결정된다.

// let oobj = {
//     myNames: 'sunny',
//     func: function(){
//     	console.log('name is ' + this.myNames);
//     }
// }


// say = oobj.func;
// say();














