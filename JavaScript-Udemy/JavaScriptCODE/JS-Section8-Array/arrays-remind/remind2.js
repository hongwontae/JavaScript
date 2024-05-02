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


console.log('-----------------------------------------------------------------------------')
console.log('map()')

const c =[1,2,3,4,5,6,7,8,9,10]
const c1 = c.map((currentValue, idx, arr)=>{
    console.log(currentValue);
    return currentValue
})
console.log(c1) 

const c2 = c.map(currentValue => currentValue);
console.log(c2); // 화살표 함수 사용

// map은 변수에 반환값으로 복사된 값을 준다. 그 복사된 값은 새로운 값이기 떄문에 기존의 배열과 상호작용하지 않는다. return이 있어야 한다.
// forEach와 map은 항상 콜백함수를 매개변수로 받는다.


console.log('-----------------------------------------------------------------------------')
console.log('sort()/ reverse()')

const d = [1,2,4,5,78,95,2,44132,78,4566,122,19,4,34,867]
d.sort()
console.log(d); // sort의 매개변수가 없으면 배열안의 모든 것을 문자열로 취급하고 유니코드 순서에 따라 오름차순으로 정렬된다.

d.sort((a,b) => {
    if(a>b){
        return 1
    } else if(a===b){
        return 0
    } else{
        return -1
    }
}); // 숫자를 오름차순으로 정렬시키는 sort() 로직
console.log(d);
// sort를 이용해서 원하는 값을 만드려면 인자에 콜백함수를 주어서 사용해야 한다.
// sort는 새로운 값을 만드는 것이 아니다. 원본 타입를 수정한다.


console.log('-----------------------------------------------------------------------------')
console.log('reverse()')

d.reverse()
console.log(d)
// reverse() => 오름차순을 내림차순으로, 내림차순을 오름차순으로 바꾸는 메서드
// 새로운 값을 만드는 것이 아니다. 기존의 값 수정하는 것


console.log('-----------------------------------------------------------------------------')
console.log('filter()')

const e = [1,2,3,4,5,6,7,8,9,10]
const e1 = e.filter((currentValue, idx, arr) => {
    return currentValue%2 === 1
})
console.log(e1)

e.push(100);
console.log(e)
console.log(e1)

// filter는 제약조건을 단 배열만 가져오는 메서드
// 반환값은 새로운 배열이다.


console.log('-----------------------------------------------------------------------------')
console.log('reduce')

const f = [1,2,3,4,5,6,7,8,9,10]
const f1 = f.reduce((acc,cur) => {
    return acc+cur
})

console.log(f1); // 55

const f2 = f.reduce((acc,cur) => {
    return acc+cur
},10) // [10,1,2,3,4,5,6,7,8,9,10] 초기값을 줌으로 이렇게 게산된다.

console.log(f2);

const numbers = [1,2,3,4,5,6,7,8,9,10]

const avg = numbers.reduce((acc, cur, index, arr) => {
	if (index === arr.length - 1) { // index가 마지막일 때
		return (acc + cur) / arr.length; // cur - 4
	}
	return acc + cur; // cur - 1, 2, 3
	}, 0);

console.log("avg", avg);
// 반환값은 새로운 값
// acc => 누적된 값, cur => 현재값, index => 인덱스, arr => 현재 reduce되고 있는 배열본체
// acc+cur[0] = value => value+cur[1] = value2 => value2+cur[2] => value3


console.log('-----------------------------------------------------------------------------')
console.log('split(), join()')

let g = 'koala3121, dnjsxoghd, sskksks, dkdkkd'
let g1 = g.split(', ',2)
console.log(g1);
console.log(g);
// split() => 문자열을 배열로 만드는 메서드이다.
// 첫번째 인자 => 구분자이다. 문자열을 나누는 기준을 '' 넣는다.
// 두번쨰 인자 => 최대배열 개수를 의미한다. g는 4개이다. g.split('-',2) => 2개의 배열만 반환된다.

const g2 = ['홍','원','태']
const g3 = g2.join('');
console.log(g3);
// join() => 배열을 문자열로 바꾸는 메서드
// 인자로 String을 받는다. string을 주면 결합하는 가운데 문자열로 들어간다.

