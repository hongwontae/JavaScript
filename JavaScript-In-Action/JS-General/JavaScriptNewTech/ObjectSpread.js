const cat ={
    pwd1 : 123456,
    id1 : "hong won tae",
    isAdmin1 : true
}

const dog = {
    pwd2 : 9876354321,
    id2 : "Ji Yeon",
    isAdmin2 : false
}

const animals = {...cat, ...dog}

console.log(animals)

const Eric = {...[2,4,6,8]};
console.log(Eric)
// 인덱스를 키로 사용한다.

const Alli = {...["DeleAlli"]}
console.log(Alli)