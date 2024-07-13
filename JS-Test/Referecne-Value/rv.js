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


let b = [
    {
        id : 1,
        name : 'h2t1'
    },
    {
        id : 2,
        name : 'h2t2'
    },
    {
        id : 3,
        name : 'h2t3'
    },
    
];

function check(obj1){
    let b1 = b.find((ele)=>{
        return ele.id === obj1.id
    })

    let b2 = b.map((ele)=>{
         return ele.id
    })

    let b3 = b.filter((ele)=>{
        return ele.id === obj1.id
    })

    console.log(b1);
    // console.log(b2)
    console.log(b3)

    console.log(b[1] === b1);
    console.log(b2 === b);
    console.log(b3[0] === b[1]);
};

check({id :2});


// find, filter은 같은 참조값을 공유한다.
// map은 다른 참조값이다.

// find는 해당되는 요소를 반환한다.
// map과 filter는 배열을 반환한다. 다만 반환값일 떄만 그런 것이다. 돌려서 무엇을 할 떄는 아니다.

