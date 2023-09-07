const sp = [1,2,3,4,5,6,7,8,9,10]

//sp.splice(0); // 매개변수를 하나만 취했을 떄 0을 넣으면 모두 삭제한다.
//console.log(sp)

//sp.splice(5) // 1,2,3,4,5 배열 출력
//console.log(sp)

// sp.splice(0,1)
// console.log(sp)

sp.splice(1,4,10,20,30)
console.log(sp)

const a1 =sp.splice(-2,1) // 왼쪽부터 두 번쨰 중에 하나만 삭제하라
console.log(a1)

