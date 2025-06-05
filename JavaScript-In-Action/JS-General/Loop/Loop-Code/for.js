for (let i=1; i<=10;i++){
    console.log(i)
}

console.log('-----------------------------------------------------------')

for(let i=1; i<=20; i+=2){
    console.log(i)
}

console.log('-----------------------------------------------------------')

for(let i =100; i>=0; i-=10){
    console.log(i)
}

console.log('-----------------------------------------------------------')

// * 배열 루프
let test = ['line','upside','downside','lucasvascas','luissuatres']
for(let i=0; i<test.length;i++){
    console.log(i+" = "+test[i])
}

console.log('-----------------------------------------------------------')

for(let i= test.length-1; i>=0; i--){
    console.log(test[i])
}

// 중첩된 for문 => for문 바디 안에 다른 for 루프를 넣는 것을 의미한다.
for(let i=0; i<=10;i++){
    console.log(`i is : ${i}`)
    for(let j=1; j<4;j++){
        console.log(`     j is : ${j}`)
    }
}
// i=1일 떄 j는 다 반복하고, i=2일 떄 j는 다 반복하고 => 계속 이어진다.
// i가 한 번 반복할 떄 중첩된 루프는 다 실행하고 i의 다음 순서로 넘어간다.
const seatingChart = [
    ['Kirsten','EIRK','NATIMA'],
    ['GOGOGO','NONONONON','SALIBA'],
    ['WOOD','DUNK','SULE']
]

console.log('-----------------------------------------------------------')

for(let i=0; i<seatingChart.length;i++){
    console.log(seatingChart[i])
}
for(let i=0; i<seatingChart.length;i++){
     const row = seatingChart[i]
     for(let j=0; j<row.length;j++){
        console.log(row[j])
     }
}

console.log('---------------------------------------------------------------')

const test3 = seatingChart[1][1]
console.log(test3)
// 이런 형식이 반복된다는 것이다.


