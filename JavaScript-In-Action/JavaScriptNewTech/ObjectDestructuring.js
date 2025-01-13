const user = {
    email : 'harvey@gmail.com',
    password : 'sCotl123',
    firstName : 'hong',
    lastName : 'won tae',
    born : 1998,
    died : 2018,
    bio : 'he is string and he is fast than all world people',
    city : 'San Francisco',
    state : 'Republic of Korea'
}

const {email, firstName, lastName} = user

console.log(email)
console.log(firstName)
console.log(lastName)

const {city : LivesSpot}= user
console.log(LivesSpot)

const{soccer = 'ronaldo'} = user; // 디폴트 값을 넣어주는 것이다.


// 이런 작업을 해도 기존의 객체의 수정이나 변경은 아니다.
// 객체의 값을 가져와 변수에 넣어주는 것이다.
// 값을 변경시키는 것은 아니된다.

