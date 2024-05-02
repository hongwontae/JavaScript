const addMovieBtn = document.getElementById('add-movie-btn');
const searchBtn = document.getElementById('search-btn');

const movies = [];

const rendering = () => {
  const moveList = document.getElementById('movie-list');

  if(movies.length === 0){
    moveList.classList.remove('visible')
    return;
  } else{
    moveList.classList.add('visible')
  }

  moveList.innerHTML = '';

  movies.forEach((currentValue) => {
    const movieEl = document.createElement('li');
    movieEl.textContent =currentValue.info.title;
    moveList.append(movieEl);
  })
  
}


const addMovieHandler = () => {
  const title = document.getElementById('title').value;
  const extraName = document.getElementById('extra-name').value;
  const extraValue = document.getElementById('extra-value').value;

  if (
    title.trim() === '' ||
    extraName.trim() === '' ||
    extraValue.trim() === ''
  ) {
    return;
  }

  const newMovie = {
    info: {
      title,
      [extraName]: extraValue
    },
    id: Math.random()
  };

  movies.push(newMovie);
  rendering();
};

addMovieBtn.addEventListener('click', addMovieHandler);

console.log(document.getElementById('ko').textContent);
console.log(document.getElementById('ko').innerHTML);
console.log(document.getElementById('ko').innerText);

const a1 = document.querySelector('#ko')
a1.innerHTML = '';
console.log(a1);






