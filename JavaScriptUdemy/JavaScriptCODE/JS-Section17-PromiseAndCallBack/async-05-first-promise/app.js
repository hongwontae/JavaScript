const button = document.querySelector('button');
const output = document.querySelector('p');

const setTimer = (duration) => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Done');
      console.dir(resolve);
    },duration)
  })
  return promise;
}


function trackUserHandler() {
  navigator.geolocation.getCurrentPosition(
    posData => {
      setTimer(2000).then(data => {
        console.log(data, posData);
      })
      
    },
    error => {
      console.log(error);
    }
  );
    setTimer().then(()=>{
      console.log('Timer Done!')
    })
  console.log('Getting position...');
}

button.addEventListener('click', trackUserHandler);

// let result = 0;

// for (let i = 0; i < 100000000; i++) {
//   result += i;
// }

// console.log(result);
