// 배열은 Object이다. => 객체이다.
// 배열과 스트링은 각 요소에 인덱스가 할당된다.
// days [] [] => 해당 인덱스에 위치한 배열을 찾고/ 배열의 값의 인덱스를 찾는다.

// 스트링은 불변 타입이라서 접근하여 값을 바꿀 수 없다.
// 배열은 값에 접근해서 값을 바꿀 수 있다.

let days = [1,2,3,4,5,6]
console.log('days => ',days)
// 길이는 6개, 인덱스의 끝은 5
// 만약 길이가 6개인 days 배열에 10번 째 순서에 값을 넣으면?
// 10번 쨰에 들어가고 나머지 공간은 그냥 빈 공간이 되어 버린다.

// 배열의 매장 메서드
// Push, Pop => 배열 끝의 항목을 추가하거나 제거할 수 있다.
// push => 배열의 끝에 항목을 추가한다.  movieLine.push('son') or movieLine.push('asd'.'asd')
// pop => 배열의 끝의 항목을 제거한다. movieLine.pop() => 파라미터가 필요없다. nㅁncy 삭제
let movieLine = ['Tom', 'nancy']
console.log('movieLine => ',movieLine)

// shift, unshift =>
// shift => 배열의 처음의 항목을 제거한다. movieLine.shift() => tom 삭제
// unshift => 배열의 처음에 항목을 추가한다. movieLine.unshift('VIP')=> 맨 앞에 VIP가 나온다.

// concat => 배열을 합치되 기존의 배열을 수정하지는 않는다.
days.concat(movieLine)
console.log('days => ',days)
let com = days.concat(movieLine)
console.log('com => ',com)

// includes => 배열에 특정 값이 포함되어 있는지 알려준다. true,false로 알려준다.
let i = com.includes(1)
let o = com.includes('asd')
console.log(i)
console.log(o)

// indexOf => 배열의 인덱스를 찾아준다.
let io = com.indexOf('Tom')
let io2 = com.indexOf('www')
console.log(io)
console.log(io2)

// reverse => 배열을 뒤집어준다. / 원본을 바꾼다. / 매개변수 필요없다. / 배열을 수정한다.
com.reverse()
console.log(com)

console.log('----------------------------------------------------------------------')

// slice(N,N) => 배열의 일부를 복사하는 방법이다. 시작점은 포함하지만 정지점은 포함하지 않는다.
// (N,N) => 매개변수가 하나만 들어가도 된다. 배열을 수정하지 않는다.
// 인덱스를 음수로 사용하면 배열의 끝에서부터 시작한다.
let colors = ['red','orange','yellow','green','blue','indigo','violet'];
let coolColors = colors.slice(3)
let choColors = colors.slice(1,4) // 1,2,3 세개가 값으로 나온다.
let minusColors = colors.slice(-3)
console.log(coolColors)
console.log(choColors)
console.log(minusColors)

console.log('----------------------------------------------------------------------')


// splice => 기존 요소들을 제거하거나 데체하거나 새로운 요소들을 추가해서 배열의 내용을 변경한다.
// => 삽입하거나 결합시킨다는 의미이다. / 바로 수정한다.
// splice(제거허거나 추가할 인덱스, 제거할 갯수, 추가할 값)
colors.splice(5,1)
console.log(colors)

days.splice(1,3)
console.log(days)

colors.splice(5,0,'indigo')
console.log(colors)
colors.splice(0,0,'dark','ddark')
console.log(colors)

console.log('----------------------------------------------------------------------')


// sort => 배열을 줄이는 메서드이다. sort의 아무런 매개변수도 넣지 않으면 모든 것을 스트링으로
// 변환하고 각 문자열의 UTF-16코드 유닛 값을 비교한다.
let scores = [1,2,3,40,2500,345,32,55]
scores.sort()
console.log(scores)

// toString => 배열을 문자열로 바꿔준다.
let iii = scores.toString();
console.log(iii)

// 배열은 참조값을 가진다. [1,2,3] === [1,2,3] => false => 주소값이 다르니까

// const로 배열을 생성할 수 있다 but 변수 자체가 재할당되지 않는다.
// 같은 용기안에 그대로 있게 하는 방법이다.
// 재할당과 참조값 변경은 불가능하지만 콘텐츠의 값들을 접근하여 변경시킬 수 있다.

// 배열 안에 배열을 넣을 수 있다.
let Multiple = [[1,2,3],[4,null,5],[6,7,8]]
console.log(Multiple[1][1])
