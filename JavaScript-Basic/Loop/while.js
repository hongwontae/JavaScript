//while 반복문 => 어떤 조건문이 오더라도 조건이 참이면 끝까지 반복한다.
let count =0;
while(count<10){
    count++
    console.log(count)
}
console.log('---------------------')

// 반복 횟수가 정해져 있지 않을 떄 while이 더 효율적이다.
// const scret = 'BabyHippo'
// let guess =  prompt('enter the secret code....');
// while(guess !== scret){
//     guess=prompt('enter the scret code.')
// }
// console.log('solve')

// break keyword
// let input = prompt('Hey, say SomeThing')
// while(true){
//     input = prompt(input);
//     if(input.toLowerCase() === "stops") break;
// }
// console.log("you win")

// 심화 loop
console.log(parseInt("456789"))
console.log(parseInt("213asdasd")) // paserInt()=> 정수로 치환한다.

let maximum = parseInt(prompt('Enter the Maximum number!!'));
while(!maximum){
    maximum = parseInt(prompt('Enter a vaild number'));
}

const targetNum = Math.floor(Math.random()*maximum)+1;

let guess = parseInt(prompt('Enter your First guess!'));
let attempts = 1;

while(parseInt(guess) !== targetNum){
    if(guess === 'q'){break;}
    attempts++;
    if(guess !== targetNum){
        if(guess > targetNum){
            guess = prompt('Too high!')
        } else{
            guess = prompt('Too low!')
        }
    }
}
if(guess === 'q'){
    console.log('shy boy')
} else{
    console.log('you win this game')
    console.log(`you got it. your attemp : ${attempts}`)
}

