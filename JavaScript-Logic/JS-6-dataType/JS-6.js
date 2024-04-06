// this
console.log(this)
function add(){
    console.log(`${this.name} and add 안`)
}


// 바인딩
//bind
let obj = {name : 'hwt'};
function add(){
    console.log(`나는 아름다운 ${this.name}이다.`)
}
let boundary = add.bind(obj);
boundary();
