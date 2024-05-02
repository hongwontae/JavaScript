const button = document.querySelector('button');
const output = document.querySelector('p');

const setTime = (duration) => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Done'); // 비동기 함수
    }, duration);
  });
  return promise;
};

console.dir(setTime(3000));

function trackUserHandler() {
  navigator.geolocation.getCurrentPosition(posData => {
    setTime(2000).then(data => {
      console.log(data, posData);
    })
  }, error => {
    console.log(error)
  })
  setTimeout(() => {console.log('Timer Done')},0)
  console.log('Getting position');
}


button.addEventListener('click', trackUserHandler);
// 이 리스너는 클릭이 될 떄까지 코드 실행을 멈추는 것이 아니다.
// 이 리스너는 브라우저에서 관리되며 js는 다음 코드로 간다.
// click이 되었을 떄 trackUserHandler을 연산하고 끝마치면 브라우저에서 여기로 돌아와 실행시킨다.

// let result = 0;

// for(let i=0; i<1000000; i++){
//   result+=i
// }

// console.log(result);