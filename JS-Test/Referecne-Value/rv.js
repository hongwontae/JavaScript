let a = {
    name : 'hwt',
    age : '30'
};

console.log(a.name);

let a1 = {
    name : a.name,
    age : a.age
};

console.log(a === a1);

// 객체의 프로퍼티는 객체값이랑 관련없다.
