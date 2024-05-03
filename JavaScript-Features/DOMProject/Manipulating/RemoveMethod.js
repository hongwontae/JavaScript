// removeCjild => 선택한 요소 삭제가 아니라 요소에서 자식을 제거하는 것이다.
const firstLi = document.querySelector('li')
console.log(firstLi)
const ul = firstLi.parentElement
console.log(ul)
ul.removeChild(firstLi) // 부모.메서드,(자식) / 하나만 지워진다.

// 간단하게 이렇게 한다.
const b = document.querySelector('b')
b.parentElement.removeChild(b) //Slike 삭제

// remove() => 해당 요소를 바로 삭제한다.
const img = document.querySelector('img')
img.remove() // 처음 닭 사진 삭제