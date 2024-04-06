// 객체 리터럴
let a1 = {name : 'kkk', age : 4000};
console.log(a1);

// 객체 생성자
let a2 = new Object({name : 'www', age : 99});
console.log(a2);

// 대괄호 표기법
let a3 = {
    ["ko-ko"] : '111',
}
console.log(a3["ko-ko"]);

// for-in
for (const key in a1) {
    console.log(a1[key])
}

// 얕은 복사
let b1 = {
    player : 'hhh',
    ["age-default"] : 4000
}

// 깊은 복사
let b2 = b1;
b2.user = 'HHHWWWTTT';
console.log(b1)

let c1 = {
    name : 'wwww',
    href : 'https://www.google.com'
}

let c2={};

for (const key in c1) {
    c2[key] = c1[key];
}

c2.name = 'kkk'

console.log(c1);


// object.assign();
let clone = Object.assign(c1, b1);
console.log(clone);
clone.href='pppp';
console.log(c1);
// => Object.assign => 복사했지만 힙 메모리도 각 객체로부터 전부 복사한다.


// this
let d1 = {
    name : 'hwt',
    hello(){
        // let arrow = alert(this.name)
        // arrow();
    }
}

// d1.hello();
// arrow을 호출한 객체는 hello이다. arrow-func의 this는 외부를 참조한다.


// 생성자 함수와 new
function Hwt(a,b){
    this.name = a;
    this.age = b;
    this.yell = ()=>{
        console.log('!!!!!!!!!!!!!!!!!')
    }
}
// return this = {name,age,yell};

let hwt = new Hwt('HWT', 27);
console.log(hwt);


let kk =1;
let kk2 = kk;
kk2 = 3;
console.log(kk);

