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


console.log('메서드 this..............................................................')

var myName = 'HWT';

function caaa(){
    console.log(this.myName);
    console.log(this);
}

let obj = {
    myName : 'HWT HWT HWT',
    func : caaa,
}

caaa();

obj.func();

console.log('메서드 this 3-3..............................................................')
console.log('메서드 this 3-3..............................................................')

let A = {
    myName : 'Cake kkk',
    func : function(){
        console.log(this.myName)
        console.log(this)
    }
}

let B = {
    myName : 'B Cake',
    func1 : A.func
}

A.func();
B.func1();
// => 호출된 객체에 따라 this 값에 변경된다. => 실행 컨텍스트 this 바인딩 시점은 객체에서 함수가 호출될 떄 이다.
// 원래 실행 컨텍스트 생성은 전역, 함수가 호출된 시점


console.log('메서드 this 3-4..............................................................')

let obj2 = {
    myName : 'Sunny',
    func22 : function(){
        console.log(`name is ${this.myName}`)
    },
    keke : this.myName
}

let say = obj2.keke;
console.log(say)




