// map, find, filter

let mapArray = [1,2,3,4,5,6,7,8,9,10];
let c = mapArray.map((ele, idx, arr)=>{
    return 'dd'
})

console.log(c);

let findArray = [1,2,3,4,5,199];
let a = findArray.find((ele, idx, arr)=>{
    return ele === 199;
})
console.log(a);

let filterArray = [1,2,3,4,5,199];
let f = filterArray.filter((ele, idx, arr)=>{
    return ele === 199;
})
console.log(f);


// splice, slice, reduce
let ss = [1,2,3,4,5,6];
ss.splice(3,2,'dd');
// 3인덱스에서 2개 지우고 그 자리에서 dd 추가
console.log(ss);

let sl = [1,2,3,4,5];
let s2 = sl.slice(2,4);
// 2인덱스에서 4length까지 복사
console.log(s2);

let re = [10,20,30,40,50,60];
let re2 = re.reduce((acc, ele, idx, arr)=>{
    return acc + ele;
}, 100)

console.log(re2);