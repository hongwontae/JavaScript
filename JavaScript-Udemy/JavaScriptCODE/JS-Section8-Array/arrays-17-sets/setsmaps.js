const ids = new Set(['HI','From','Set']);
ids.add(2)

ids.delete('Set')
console.log(ids)
console.log(ids[0])
console.log(ids.has(1))
console.log(ids.has(5))

console.log(ids.entries())

for(const entry of ids.entries()){
    console.log(entry[0])
}

const kk = new Set([1,2,3])
console.log(kk)

for(const a of kk.entries()){
    console.log(a[0])
} // 배열을 반환한다.