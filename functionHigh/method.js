// 메서드 => 객체에 속성으로 추가된 함수인것이다.
const myMath = {
    PI : 3.151592,
    square : function(x){
        return x*x
    },
    cube : function(num){
        return num**3;
    }
}

const genius = {
    PI : 3.141592,
    square(num){
        return num*num;
    },
    myStyle(num){
        return num+num+num-10;
    }
} // 객체 내의 함수 정의하는 속기법이다. function 작성을 안해도 function으로 인식한다.
    // square : function(x) => square(x)