console.log('includes()')

const a = [1,2,3,4,5]
const a1 = a.includes(1);
console.log(a1)
const a2 = a.includes(5);
console.log(a2);
const a3 = a.includes(10);
console.log(a3);


console.log('-----------------------------------------------------------------------------')
console.log('forEach()')

const b = [1,2,3,4,5,6,7,8,9,10]
b.forEach((currentValue, idx, arr) => {
    console.log(currentValue)
});

const b1 = b.forEach((currentValue, idx, arr) => {
    console.log(currentValue)
});
console.log(b1); // undefined

for(const b1 of b){
    console.log(b1)
}; // forEach와 for-of의 값은 같다.

// forEach => 반복문을 쉽게 사용하기 위해 만든 배열 메서드이다.
// currentValue => 현재 처리하는 값, idx => Index, arr => forEach가 처리하고 있는 배열
// forEach의 반환값은 항상 undefined이다.
// 복사된 값은 항상 새로운 값이다.