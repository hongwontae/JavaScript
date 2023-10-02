const firstBold = document.querySelector('b')
console.log(firstBold)
console.log(firstBold.parentElement)
console.log(firstBold.parentElement.parentElement)

console.log('-----------------------------------------------------------')

const paragraph = firstBold.parentElement
console.log(paragraph.children)
console.log(paragraph.children[0])

const squareImg = document.querySelector('.square')
console.log(squareImg)
console.log(squareImg.nextElementSibling)
console.log(squareImg.previousElementSibling)
