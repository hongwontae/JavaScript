function func (a) {
    return a
}

console.log(func()); // undefined

function func2(a,b){
    return a+b
}

console.log(func2()); // NaN

console.log('---------------1------------')
function func3(a=10,b=20){
    return console.log(a+b)
}

func3();
func3(5);

console.log('---------------2------------')
function func4() {
    return 100;
}

function func5(a=10,b=func4(),c=50) {
    return console.log(a+b+c)
};
func5(); // 160;

console.log('---------------3------------')
function func6() {
    return 10;
}
function func7(a=func6(), b=a*10, c=b+10) {
    console.log(a+b+c) //a =10, b = 100, c = 110
}
func7();


console.log('---------------4------------')

let person = {
    name : 'hwt',
    age : 20
}

function func8(a=person) {
    console.log(a)
};

func8();

// 1. func f(a=10, b=20)
// 2. 매개변수에 디폴트 파라미터에 함수를 넣을 수 있다. (실행시켜야 된다.)
// 3. 매개변수에 디폴트 파라미터를 동적으로 사용할 수 있다.
// 4. 매개변수에 디폴트 파라미터에 객체를 넣을 수 있다.

