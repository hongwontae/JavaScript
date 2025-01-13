function makeMysteryFunc(){
    const rand = Math.random();
    if(rand>0.5){
        return function (){
            console.log("good job keep gooing")
        }
    } else {
        return function () {
            alert("바이러스에 오염되었으니 움직이지 마시오")
            alert("간첩으로 오해 받기 싫다면 창을 끄지 마시오")
        }
    }
}

function makeBetweenFunc(min, max){
    return function (num) {
        return num >= min && num<=max;
    }
}

