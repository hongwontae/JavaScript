let a = Symbol("id");
let a1 = Symbol("id");
console.log(a);
console.log(a1);

console.log(a == a1); // false

//alert(a); // 오류가 발생한다.
//alert(a.toString()); // Symbol을 toStirng()으로 string으로 바꿔서 내보내면 된다.
console.log(typeof a.toString()); 


// 심볼형을 객체의 키값에 부여하는 방법-1
let user = {
    name : "John"
}
let id = Symbol("id");
user[id] = 1;
console.log(user);


// 심볼형을 객체의 키값에 부여하는 방법-1
let pw = Symbol("Password");
let user2 = {
    name : "hwt",
    [pw] : "1234-5677"
};

console.log(user2);

for(const cool in user2){
    console.log(cool);
    console.log(user2[cool])
} // name키만 반환된다. => 심볼형 반환x

let a6 = Object.keys(user2)
console.log(a6); // => [name]만 반환된다.

let a7 = Object.assign(user2);
console.log(a7); // => Objcet.assign()의 반환값은 심볼도 포함한다.


let b = Symbol.for("cool");
console.log(b);
let b1 = Symbol.for("cool");
console.log(b1);
console.log(b === b1);
// Symbol.for(key)를 사용하면 cool이라는 
