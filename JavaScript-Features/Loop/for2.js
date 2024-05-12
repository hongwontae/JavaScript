// for of
// for(사용할 변수/ 반복 가능한 개체) => 배열 안에 있는 개체를 끝까지 반복한다.
// 인덱스가 필요없는 경우 => 그냥 배열을 전체 반복하겠다 => 이 경우 for of를 사용하면
const var1 = ['anelka','drocbar','herad','asd']
for(let var2 of var1){
    console.log(var2)
}

console.log('-----------------------------------------------------------')


const seatingChart = [
    ['Kirsten','EIRK','NATIMA'],
    ['GOGOGO','NONONONON','SALIBA'],
    ['WOOD','DUNK','SULE']
]
    
for(let i=0; i<seatingChart.length;i++){
    console.log(seatingChart[i])
}

for(let i=0; i<seatingChart.length;i++){
     const row = seatingChart[i]
     for(let j=0; j<row.length;j++){
        console.log(row[j])
     }
}

console.log('-----------------------------------------------------------')
for(let chair of seatingChart){
    for(let student of chair){
        console.log(student)
    }
}

for(let char of "henderson"){
    console.log(char)
}