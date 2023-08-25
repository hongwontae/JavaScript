// 함수는 코드의 재사용 가능한 일부로서 언제든 사용할 수 있도록 이름을 붙여놓은 것이다.

function singSong(){
    console.log('DO')
    console.log('RE')
    console.log('MI')
}

// 함수를 실행하는 것은 
singSong()
singSong()
singSong()

// 인수는 함수에 전달하는 입력 값이다. / 매개변수로 키워드 사용불가
function greet (orm){
console.log(`orm is : ${orm}`)
}
greet()
greet(1234)
// 만약 매개변수를 받지 않으면 실행은 되는 매개변수를 받아야하는 값이 undefined가 된다.
function hippo(ars) {
    console.log(`안녕 디지몬 : ${ars}`)
}
hippo()
hippo(1234)

// 인수는 두 개가 되도 된다.
// 인수가 하나가 빠지거나 두 개가 빠져도 되지만 로직 상 오류가 발생할 수 도 있다.
function  repeat(str,num) {
    let result = '';
    for(let i=1; i<=num; i++ ){
        result+=str;
    }
    console.log(result);
}

// return 값
// 출력하는게 아니라 저장하고 보관히기 위해서는 반환 키워드 return이 필요하다.
// 또한 반환 키워드는 함수 실행을 중단시킨다. 언제나 return 값은 하나이다.
function add(x,y) {
    sum = x+y;
    return sum;
    console.log("시마이") // 절대 실행되지 않는다.
}

console.log('==========================================================================')

function add1(x,y) {
    if(typeof(x) !== 'number' || typeof(y) !== 'number'){
        return false;
    }
    sum = x+y;
    return sum;
}
// return이 함수 실행을 종료 시키니까 else 필요없다.
