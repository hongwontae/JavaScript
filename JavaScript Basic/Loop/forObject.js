// 일반적은 for문은 일반 객체를 반복해주지 않는다.
// for in문은 객체를 반복해준다.
const testScores = {
    keenan : 80,
    damon : 67,
    kim : 89,
    marlon : 72,
    dauw : 77,
    nadia : 83,
    diedra : 90 
}

// for(let iii of testScores){
//     console.log(iii)
// } // 오류발생

for(let person in testScores){
    console.log(person)
} // 키 값을 반복해서 가져온다.

for(let person in testScores){
    console.log(`${person} Scored ${testScores[person]}`)
}

console.log('-------------------------------------------------------------------------- ')

// Object 메서드 => 객체를 전달하면 배열이 나온다.
// Object.Keys(testScores) => 객체에서 가져온 키로 만들어진 실제 배열이 탄생
// Object.values(testScores) => 객체에서 가져온 값으로 만들어진 실제 배열이 탄생
// Objcet.entries(testScores) => 객체에서 가젼온 키-값으로 실제 배열이 탄생

for(let person of Object.values(testScores)){
    console.log(person)
}