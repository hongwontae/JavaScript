async function add (){
    return 1;
}

add().then(res => {
    console.log(res)
})


async function func1(){
    return Promise.resolve(10)
}

func1().then(res => {
    console.log(res);
})

async function f() {

    let promise = new Promise((resolve, reject) => {
      setTimeout(() => resolve("완료!"), 1000)
    });
  
    let result = await promise; // 프라미스가 이행될 때까지 기다림 (*)

    return result;
  
  }
  
f().then(data => {
    console.log(data);
})
