let a = {name : 'hwt', age :20, func(){console.log('My name is hwt')}}

let {name, age, func, add='asd'} = a
console.log(name);
console.log(age);
console.log(func);
console.log(add);
// 객체 구조 분해


let a1 = [1,2,3,4,5,6,7,8,9,10];
let [a2,a3,...a4] = a1;
console.log(a2);
console.log(a3);
console.log(a4);

let [,,a5] = a1
console.log(a5); //3 


let b = {name1 : 'asd', age1 : 20, arr:[1,2,3,4,5], name2 : 'koala3121'};
let {name1, age1, arr, name2, name3 = 'ko'} = b;
console.log(name3); //ko;

let c = {player : 'hwt', age3 : 28, sprots : 'soccer', team : 'riverpool'};
let {player, age3, sprots, team : GreatTeam} = c;
console.log(GreatTeam); // riverpool


let d = {d1: {d2 :'hwt', d3 : 20, d4 : 'Mancherster City'}}
let {d1 : {d4}} = d;
console.log(d4);

let e = [1,2,3,4,5,[100,200,300]]
let [one,two,,,,[...first]] = e;
console.log(one);
console.log(two);
console.log(first);


let f =function(){return {f1:'hwt', f2 : 300, f3 : function(){console.log('도객 일도살')}}} 

let {f1,f2,f3} = f();
console.log(f1);
console.log(f2);
console.log(f3());


let g = {g1: 'hwt', g2 : '시게히라', g3 : '난기'}

function g4({g1 : myName, g2 : choIn1 ,g3 : choin2}) {
    console.log(`g1 = ${myName}, g2 = ${choIn1}, g3 = ${choin2}`)
}

g4(g);


let z = {z1 : 'hwt', z2 : 20};
let {z1,z2 : z3, z4 = 3000} = z;
console.log(z1)
console.log(z3);
console.log(z4);


let music = {musicName : 'Opera', avgAge : 30, totalAudience : 500}

let musicFuc = function({musicName, avgAge, totalAudience, speed = 1000}){
    console.log(musicName);
    console.log(avgAge);
    console.log(totalAudience);
    console.log(speed);
}

musicFuc(music);