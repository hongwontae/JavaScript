// 객체는 일종의 구조에 여러 데이터 조각을 저장하게 해준다.
// 키-값(프로퍼티)이라는 것을 이용해서 데이터가 저장된다.
// Property => key와 vlaue / key를 이용해서 value를 가져온다.
// 핵심은 객체 안에 다양한 종류의 값을 넣을 수 있다는 것이다.

let person = {
    firstName : 'Mick',
    lastName : 'Jagger'
}
console.log(person)

console.log("----------------------------------------------------------------------")


// 객체 꺼내는 방법
// [] 사용방법
// []는 키값에 '' 생략하면 오류발생한다.
let test1 = person['lastName']
console.log(test1)
// []  표현식 사용이 가능하다.
let testing = person['last'+'Name']
console.log(testing)

console.log("----------------------------------------------------------------------")


// dot활용 방법
console.log(person.firstName)
console.log(person.lastName)

console.log("----------------------------------------------------------------------")


//* 객체에서 만드는 모든 키들은 문자열로 변환된다.

let years = {1999:'good', 2020:'bad'}
let test2 = years["1999"]
let test3 = years[1999]
console.log(test2)
console.log(test3) //* 똑같은 good이 출력되는데 test3은 1999은 실행할 떄 알아서 형변환하기 때문이다.

console.log("----------------------------------------------------------------------")


// 객체 값 변경하기
// const 객체는 컨테이너만 기존의 것을 유지해면 된다.
// 즉 객체의 키=값 변경가능
const midterms = {
    deadline : 95,
    thomas : 78
}

console.log(midterms.deadline)
console.log(midterms.deadline = 80)
console.log(midterms['deadline']='A')

console.log("----------------------------------------------------------------------")

// 객체의 값 추가하기
const test4 = midterms['americano']="SSS"
console.log(test4)
const test5 = midterms.ezra = "FFF"
console.log(test5)

console.log("----------------------------------------------------------------------")


// 객체안에 객체가, 배열안에 배열이 들어갈 수 있다.
// 또한 객체안에 배열이, 배열안에 객체가 들어갈 수 있다.
const comment = [
    {uesrName : 'Tammy', text : 'lolololoo', votes : '8'},
    {uesrName : 'FishBoy', text : 'glub glub', votes : '12387'}
]
const test6 = comment[1]["text"]
console.log(test6)
