// 코드의 직렬화 and 역직렬화
// const todos = [
//     {id: 1, content: 'HTML', completed: false},
//     {id: 2, content: 'CSS', completed: true},
//     {id: 3, content: 'JS', completed: false}
//   ]
//     const json = JSON.stringify(todos);
//   console.log(typeof json, json);

//   const parsed = JSON.parse(json);
//   console.log(typeof parsed, parsed);

// get 방식
fetch("https://jsonplaceholder.typicode.com/posts/1") 
  .then((response) => response.json())
  .then((data) => console.log(data));

// post 방식
fetch("https://jsonplaceholder.typicode.com/posts", {
	// method 옵션 POST 지정
  method: "POST",
	// JSON 포맷 (JSON으로 보낼거야~)
  headers: {
    "Content-Type": "application/json",
  },
	// body안에 payload 넣기
  body: JSON.stringify({
    title: "Test",
    body: "I am testing!",
    userId: 1,
  }),
})
  .then((response) => response.json())
  .then((data) => console.log(data));