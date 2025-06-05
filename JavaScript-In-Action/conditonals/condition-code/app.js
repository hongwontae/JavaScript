// console.log('안녕하세요.')

// const dayOfWeek = 'Friday';
// if(dayOfWeek === 'Monday'){
//     console.log('i love monday')
// } else if(dayOfWeek === 'Saturday'){
//     console.log('i love saturday')
// } else if (dayOfWeek === 'Friday'){
//     console.log('i love friday')
// }

const password = prompt('please enter a new password');
if(password.length >=6){
    console.log('long enough password')
} else {
    console.log('password too short')
}

if(password.indexOf(' ') === -1){
    console.log('good job! no space!')
} else {
    console.log('password cannot contain spaces')
}

// 중첩된 if문을 사용할 수 있다. 그러나 무거워 지기 때문에 추천하지는 않는다.

// false, 0, " ", null, undefined, NaN => false 값을 가진다. 나머지는 모두 true 이다.
// const userName = 'hong'
// if(userName){console.log('진실')}
// else{console.log('거짓')}
// => 위의 userName 강제 형변환되어 판단되어 진실이 출력된다.