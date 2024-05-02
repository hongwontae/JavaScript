// axios({
//     method : 'GET',
//     url : "https://jsonplaceholder.typicode.com/posts"
// }).then(response => {
//     console.log(response.data) // data === HTTP Body
//     console.log(response.status)
//     console.log(response.statusText)
//     console.log(response.headers)
//     console.log(response.config)
// }).catch(error => {
//     console.log(error.message)
//     console.log(new Error('Someting Wrong!'))
// })
// axios는 Promise기반 함수이다.
// 

async function axios2(){
    const axiosData = await axios({
        method : 'GET',
        url : "https://jsonplaceholder.typicode.com/posts"
    })
    return axiosData
}


