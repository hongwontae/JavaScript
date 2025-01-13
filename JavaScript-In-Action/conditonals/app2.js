const password = prompt('please enter a new password');
if(password.length>=6 && password.indexOf(' ') === -1){
    console.log('Valid Paaword')
} else{
    console.log('incorrect Format For Password')
}
// ' ' => 빈 문자열, 존재하지 않는 것이 있으면 -1
// AND가 OR보다 먼저 실행된다. AND가 OR보다 우선순위를 갖는다.
