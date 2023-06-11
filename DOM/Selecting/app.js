const d1 = document.getElementById('banner')
console.log(d1);
const d2 = document.getElementById('winner')
console.log(d2)

console.log("-----------------------------------------------------------------------")

const d3 = document.getElementsByTagName('img')
console.log(d3);
console.dir(d3)
console.log(d3[2])
console.log(d3.length)

// for(let img of d3){
//     console.log(img.src)
// }

for(let img of d3){
    img.src = 'https://images.unsplash.com/photo-1563281577-a7be47e20db9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2550&q=80'
} // 모든 이미지 한 가지로 변경
// 배열이 아니기에 map 사용 불가

const d4 = document.getElementsByTagName('a')
console.log(d4)

document.querySelector('a[title="Java"]')
document.querySelectorAll('p')

const links = document.querySelectorAll('p a')

for(let link of links){
    console.log(link.href)
}