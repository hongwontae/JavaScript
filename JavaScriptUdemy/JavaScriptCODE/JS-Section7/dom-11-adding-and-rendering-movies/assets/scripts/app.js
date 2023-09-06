const addMovieModal = document.getElementById('add-modal');
// const addMovieModal = document.querySelector('#add-modal');
// const addMovieModal = document.body.children[1];
const startAddMovieButton = document.querySelector('header button');
// const startAddMovieButton = document.querySelector('header').lastElementChild;
const backdrop = document.getElementById('backdrop');
// const backdrop = document.body.firstElementChild;
const cancelAddMovieButton = addMovieModal.querySelector('.btn--passive');
const confirmAddMovieButton = cancelAddMovieButton.nextElementSibling;
const userInputs = addMovieModal.querySelectorAll('input');

const entryTextSection = document.getElementById('entry-text')
console.log(entryTextSection)

const movies = [];

const updateUI = () => {
  if(movies.length === ''){
    console.log(movies.length)
    entryTextSection.style.display = 'block';

  } else {
    entryTextSection.style.display = 'none';
  }
}

const printJS = (title, URL, rating) => {
  const newMovieElement = document.createElement('li')
  newMovieElement.className = 'movie-element'
  newMovieElement.innerHTML = `
  <div class="movie-element__image">
    <img src="${URL}" alt="${title}">
  </div>
  <div class="movie-element__info">
    <h2>${title}</h2>
    <p>${rating}/5 stars</p>
  </div>
  `;
  console.log(newMovieElement.innerHTML)

  const listRoot = document.getElementById('movie-list')
  listRoot.append(newMovieElement)
}




const toggleBackdrop = () => {
  backdrop.classList.toggle('visible');
};

const toggleMovieModal = () => {
  // function() {}
  addMovieModal.classList.toggle('visible');
  toggleBackdrop();
};

const clearMovieInput = () => {
  for (const usrInput of userInputs) {
    usrInput.value = '';
  }
};

const cancelAddMovieHandler = () => {
  toggleMovieModal();
  clearMovieInput();
};

const addMovieHandler = () => {
  const titleValue = userInputs[0].value;
  const imageUrlValue = userInputs[1].value;
  const ratingValue = userInputs[2].value;

  if (
    titleValue.trim() === '' ||
    imageUrlValue.trim() === '' ||
    ratingValue.trim() === '' ||
    +ratingValue < 1 ||
    +ratingValue > 5
  ) {
    alert('Please enter valid values (rating between 1 and 5).');
    return;
  }

  const newMovie = {
    title: titleValue,
    image: imageUrlValue,
    rating: ratingValue
  };

  movies.push(newMovie);
  console.log(movies);
  toggleMovieModal();
  clearMovieInput();
  printJS(newMovie.title, newMovie.image, newMovie.rating)
  updateUI();
};

const backdropClickHandler = () => {
  toggleMovieModal();
};

startAddMovieButton.addEventListener('click', toggleMovieModal);
backdrop.addEventListener('click', backdropClickHandler);
cancelAddMovieButton.addEventListener('click', cancelAddMovieHandler);
confirmAddMovieButton.addEventListener('click', addMovieHandler);
