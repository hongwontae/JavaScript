// 객체의 키와 값을 가져올 변수명의 이름이 같을 경우 중복해서 적을 필요는 없다. 하나만 작성하면 된다.
// input의 값만 취하는 경우 value 프로퍼티를 써줘야 한다.

const addMovieBtn = document.getElementById('add-movie-btn');
const searchBtn = document.getElementById('search-btn');

console.log(addMovieBtn);
console.log(searchBtn);

const movie = [];

const addMovieHandler = () => {
  const titleInput = document.getElementById('title').value;
  const extraNameInput = document.getElementById('extra-name').value;
  const extraValueInput = document.getElementById('extra-value').value;
  
  if(titleInput.trim() === '' || extraNameInput.trim() === '' || extraValueInput.trim() === ''){
    return;
  }

  const movies = {
    info : {
      titleInput,
      [extraNameInput] : extraValueInput
    },
    id : Math.random()
  }

  movie.push(movies);
  console.log(movie)

}

addMovieBtn.addEventListener('click',addMovieHandler);