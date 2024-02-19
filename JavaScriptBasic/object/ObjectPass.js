function a(alonse){
    console.log(alonse.name)
}

a({alonse : 5, name : 'Reading'})
// {} => 변수로 받을 수 있다.
// alonse = {alonse : 5}


let b ={name : 'hwt', alonse : '5'};
let {name} = b;
console.log(name)