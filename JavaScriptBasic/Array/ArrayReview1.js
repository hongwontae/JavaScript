// Array의 생성방식

let a = [1,2,3,'ss']; // 일반적인 배열 생성방식
let a1 = new Array(1,2,3); // 배열은 객체임을 증명하는 배열 생성방식
let a2 = Array.of(1,2,3); // 배열을 만드는 독특한 방법
let a3 = Array.from(a2); // 이터러블 객체나 유사 배열 객체를 일반 배열로 만드는 방식이다.

// push => 뒤에 넣기
// pop => 뒤에 제거하기
// unShift => 앞에 넣기
// shift => 앞에 제거하기

let a4 = [1,2,3,4,5,1,2,3,4,5];
console.log(a4.indexOf(2)); // indexOf의 두 번쨰 인자는 해당 인덱스 이후부터 찾아라라는 로직이다.
console.log(a4.lastIndexOf(4));

let a5 = [1,2,3,4,5]; // 기존의 배열을 change한다. 
//a5.splice(); // 아무것도 넣지 않으면 주소값 복사라고 생각하자
//a5.splice(2,1); // 인덱스 1의 한개를 지워라 [1,2,4,5]
a5.splice(1,2,3); // [1,3,4,5];
console.log(a5);

let a6 = [1,2,3,4,5];
let a7 = a6.slice(); // 전체 복사
let a8 = a6.slice(1); // 해당 인덱스부터 전부 가져온다
let a9 = a6.slice(1,3); // 해당 인덱스부터 마지막 인덱스까지 모두 가져온다.
console.log(a7)
console.log(a8);
console.log(a9);

let a10 = [1,2,3,4,5];
let a11 = a10.reverse();
console.log(a11);

let a12 = [1,2,3,4,5];
a12.forEach( (cur) => {
    console.log(cur)
})

let a13 = [10,20,30,40,50];
let a14 = a13.map( (cur,idx,arr) => {
    return cur*2
})
console.log(a14);

let a15 = [1,2,3,4,5,10,20,30,40,50];
let a16 = a15.filter( (cur,idx,arr) => {
    return cur === arr[idx]
})
console.log(a16);

let a17 = [{a:'KoreanGay'}, {b:'KoreanGirl'}];
let a18 = a17.find((ele,idx,arr) => {
    return arr[idx] === ele
})
console.log(a18);

// findIndex는 find와 같은 로직이지만 index을 반환한다.

let a19 = [1,2,3,4,5];
let a20 = a19.reduce((acc,cur,idx,arr) => {
    return acc*(arr[idx]+100);
})
console.log(a20);

let a21 = [1,2,3,4,5];
let [a22,...a23] = a21; // 구조 분해 할당
console.log(a22);
console.log(a23);
// rest 모아줘서 배열로 만들고 
// spread 흩뜨려드려서 ,,,,로 만드는 것이다. 


