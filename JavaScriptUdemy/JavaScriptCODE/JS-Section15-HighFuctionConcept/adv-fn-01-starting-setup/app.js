function add (num1, num2){
    return num1+num2
};

console.log(add(1,2))
console.log(add(12,15));
// 같은 값을 입력하면 항상 같은 값을 반환한다. => 순수함수의 예시

function addRandom(num1){
    return num1+Math.random();
}
console.log(addRandom(5)) 
// 비 순수 함수 => 같은 값을 입력하더라도 반환값은 상시 달라진다.

let previousResult = 0;
function addMoreNumbers(num1, num2){
    const sum = num1 + num2;
    previousResult = sum;
    return sum;
}

console.log(addMoreNumbers(1,2))

// 이 함수는 비 순수 함수이다. 부수 효과를 만들어내기 때문이다.
// 함수의 밖에서 정의된 변수를 바꾸는 행위 => previousResult = sum;

// function sendDataToServer(){}
// 비순수 함수라는 것을 의미하도록 함수이름을 지어주는 것이 좋다.


// 팩토리 함수

function createTaxCal(tax){
    function calculateTax(amount){
        return tax * amount
    }

    return calculateTax;
}

const cal1 = createTaxCal(0.19);
const cal2 = createTaxCal(0.38);

console.log(cal1(100)); // 19
console.log(cal2(200)); // 76


// 함수 내의 함수는 내부 함수의 외부에 있는 모든 것에 접근할 수 있다. => 상위 함수의 매개변수 tax에 접근할 수 있다.

function cal(a){
    function add(b){
        return a+b
    }
    return add;
}

const cal3 = cal(5);
const cal4 = cal(10);
console.log(cal3(15)); // 20
console.log(cal4(20)); // 30


// 중첩 함수
// 반환 함수는 아니다.
function showName(name){
    function whatname(){
        console.log(name)
    }
    whatname();
}

showName('hwt');

// 팩토리 함수가 중첩 함수이면서 반환 함수이다.
function showInfo(a){
    function insideShow(b){
        console.log(a+b)
    }
    return insideShow
}

const show1 = showInfo(10);
console.log(show1);
show1(20);


function receiveGender(gender) {
    function showName(name) {
      return name + ' is ' + gender;
    }
    return showName;
  }
  
  const showMale = receiveGender('male');
  const showFemale = receiveGender('female');
  
  console.log(showMale('홍길동'));
  console.log(showMale('마이콜'));
  console.log(showFemale('이혜리'));
// 클로저의 예시이다.
// 외부함수가 닫힌 이후에도 내부 함수는 외부 함수의 변수나 매개변수에 접근하여 값을 취할 수 있다.



