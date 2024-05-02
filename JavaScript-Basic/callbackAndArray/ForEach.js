const numbers = [
    1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20
]

// function print (element){
//     console.log(element);
// }

numbers.forEach(function(el){
    if(el%2==0){
    console.log(el)}
});

// foreach => 배열에 사용되고 함수를 인수로 받고 요소 별로 함수를 실행하고 요소를 전달한다.