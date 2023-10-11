let set = new Set();

let john = { name: "John" };
let pete = { name: "Pete" };
let mary = { name: "Mary" };

// 어떤 고객(john, mary)은 여러 번 방문할 수 있습니다.
set.add(john);
set.add(pete);
set.add(mary);
set.add(john);
set.add(mary);

// 셋에는 유일무이한 값만 저장됩니다.
console.log( set.size ); // 3

for (let user of set) {
  console.log(user.name); // // John, Pete, Mary 순으로 출력됩니다.
}

set.forEach((a,b,c)=>{
    console.log(a)
    console.log(b)
    console.log(c)
})