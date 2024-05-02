let a = [1,2,3,4,5,6,7,8,9,10];

let a1 = a.splice(0);
console.log(a1);

let a2 = [1,2,3,4,5]
console.log(a2);
let a3 = a2.splice(1,2,2,2,2,2);
console.log(a3);
console.log(a2);


let b  = [1,2,3,4,5,6,7,8,9,10];
const b1 = b.slice();
console.log(b1);
const b2 = b.slice(0,3);
console.log(b2);

const c = b.concat(a2);
console.log(c);

let d = [1,2,3,4,5,6,7,8,9,10,1,2,3,4];
let d1 = d.indexOf(3);
console.log(d1);
let d2 = d.indexOf(1,10);
console.log(d2);


let e = [1,2,3,4,5,6,7,8,9,10];
e.forEach((e,idx,eArr) => {
    console.log(e)
    console.log(idx);
});

let f = ['a','b','c','d','e']
const f1 = f.map((f,idx, fArr) => {
    return f
});

console.log(f1);

let g = 'h w t'
const g1 = g.split(' ',2);
console.log(g1);

let g2 = ['홍원','태','입니다.']
let g3 = g2.join('');
console.log(g3);


let h = [1,2,3,4,5]
let h1 = [1,...h,3];
console.log(h1);

let h3 = [1,2,3,4,5];
let [h4,h5] = h3;
console.log(h4);
console.log(h5);

let [h7,...h8] = h3;
console.log(h8);