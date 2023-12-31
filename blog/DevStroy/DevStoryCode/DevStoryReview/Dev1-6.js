// Dev1

// null => 의도적으로 값이 없다는 것을 나타내는 값이자 타입이다.
// undefined => 값이 할당되지 않았음을 알리는 값이자 타입이다.

// typeof => 해당 변수의 타입을 알려준다. 7개로 나타낸다. 반환값은 string이다.
// number, undefined, boolean, object, function, string, symbol

let a = [1];
console.log(typeof a); // object

let a1 = () => {console.log('k')};
console.log(typeof a1); // function => 타입으로 함수를 구분할 수 있게 해줬다.

let a2 = null;
console.log(typeof a2); //object => JS버그이다. 


// Dev2

// primitive type => string, number, bigInt, boolean, null, undefined, symbol 7가지가 존재한다.
// 메모리 상에서 값 자체가 저장된다. => 불변이다. 재할당은 가능하다.
// valueOf() => 특정 객체의 원시값을 반환한다.
// 래퍼 객체 => 원시값을 객체값으로 변환한다. 5개의 원시타입을 래핑한다.
// == => 값만 비교한다./ === 값과 타입을 같이 비교한다.

let b = 1;
let b1 = new Number(1);
console.log(b1);
console.log(b1+1);

console.log(b == b1);
console.log(b === b1); // => 원시값인 number와 객체타입인 Object랑 비교임으로 false
console.log(b1.valueOf());


// Dev3

// JS는 String 타입을 ''으로 묶어줘야 string이라고 인식한다.
// ''의 규칙이 존재한다. => ''이 한 줄에 있어야 한다. ''을 코드상에 띄워쓰고 싶다면 /n을 사용한다.

// template Literal 

let c = `
 koala3121
`
console.log(c);
// 템플릿 리터럴은 행을 나눠서 사용할 수 있다. => 코드에 그대로 적용된다.

let c2 = 50;
let c1 = `${c2}은 c2이다.`
console.log(c1);
// 템플릿 리터럴은 ${}안에 표현식을 작성할 수 있다.

let c4 = 100;

let c5 = `${c4 ? c4 : 1000}`
console.log(c5);
// 템플릿 리터럴 안에서 삼항 연산자를 사용하여 표현할 수 있다.


// Dev4

// Default Parameter
// 매개변수에 기본값을 전달할 수 있다. 인자는 불가능하다.

let d2 = 100;

let d = function(d2=1000){ // 일반적으로 디폴트 파라미터를 사용하는 방법
    console.log(d2)
}
// d(d2);
d();


let d3 = 10;

let d4 = function(d3, d4=d3*10, d5 = d4+10){ // 디폴트 파라미터 응용
    console.log(d3+d4+d5)
}

d4(d3);


let d6 = {name : 'hwt', age : 20};

let d7 = function(d10=d6){ // 디폴트 파라미터에 객체를 전달할 수 있다.
    console.log(d10)
}

d7();

// 1. 디폴트 파라미터는 취사선택하여 사용할 수 없다.
// 2. 디폴트 파라미터는 동적으로 사용될 수 있다.
// 3. 디폴트 파라미터에 객체를 넣을 수 있다.


// Dev5

// array sort
// 배열을 정렬하는 메서드이다. 기존 배열을 수정하는 메서드이다.
// 콜백함수를 넣어서 정렬기준을 만들어준다.

let f = [1,2,3,4,5,6,7,8,9,10];

f.sort(((a,b)=>{
    return a-b // a-b는 오름차순, b-a 내림차순이다.
}));

console.log(f);


// Dev6

// 객체와 배열의 구조분해할당

let h1 = [1,2,3,4,5];
let [h2, ,...h3] = h1;
console.log(h2);
console.log(h3);

let h4 = {
    player : 'hwt',
    playerAge : 20,
    playerTeam : 'Riverpool'
}

let {player, playerAge, playerTeam} = h4;

console.log(player);
console.log(playerAge);
console.log(playerTeam);


let {player : 이름, playerTeam : Team, BeforeTeam = 'Real Madrid'} = h4;

console.log(BeforeTeam);
console.log(Team); // riverpool


let person = {
    perName : '난기',
    perAge : 30,
    perTeam : 'Japan',
    perContry : {
        p1 : 1,
        p2 : 2,
        p3 : 3,
    }
}

let {perContry : {p1}} = person;
console.log(p1);
// 중첩 구조 분해 할당
// let {perContry : {p1}} = person; => perContry의 {pl}를 p1을 변수명으로 키값을 변수 값으로 넣는다.



let h5 = function(){
   return {kkk : '차별', yyy : '인정'}
}

let {kkk,yyy} = h5();
console.log(kkk);
// 함수식내에 return이 객체라면 구조 분해 할당이 가능하다.


let g = {aaa : 'hwt', bbb : '시게히라', ccc : '세인트 펄'}

let g1 = function({aaa, bbb, ccc}){
    console.log(`aaa => ${aaa}, bbb => ${bbb}, ccc => ${ccc}`)
}

g1(g);
// 함수호출 인자에 객체를 전달하고 함수 매개변수에 구조분해할당 구문을 적으면 함수문 내부에서 구조분해할당이 된 결과값을 사용할 수 있다.

