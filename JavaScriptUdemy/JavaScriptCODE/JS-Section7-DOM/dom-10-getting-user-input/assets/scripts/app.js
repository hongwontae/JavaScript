const addMovieModal = document.getElementById('add-modal');
// const addMovieModal = document.querySelector('#add-modal');
// const addMovieModal = document.body.children[1];
const startAddMovieButton = document.querySelector('header button');
// const startAddMovieButton = document.querySelector('header').lastElementChild;
const backdrop = document.getElementById('backdrop');
// const backdrop = document.body.firstElementChild;
const cancelAddMovieButton = addMovieModal.querySelector('.btn--passive');

const confirmAddMovieButton = cancelAddMovieButton.nextElementSibling
console.log(confirmAddMovieButton)

const userInputs = addMovieModal.querySelectorAll('input');
const userInputs2 = addMovieModal.getElementsByTagName('input')
console.log(userInputs) // nodeList
console.log(userInputs2) // HTMLCollection

const movies = [];


const toggleBackdrop = () => {
  backdrop.classList.toggle('visible');
};

const toggleMovieModal = () => {
  addMovieModal.classList.toggle('visible');
  toggleBackdrop();
};

const cancelAddMovieHandler = () => {
  toggleMovieModal();
};

const clearMovieInput = () => {
  for(const userInput of userInputs){
    userInput.value = '';
  }
}

const addMovieHandler = () => {
  const titleValue = userInputs[0].value
  const imageURLValue = userInputs[1].value
  const ratingValue = userInputs[2].value

  if(titleValue.trim() === '' || imageURLValue.trim() === '' || ratingValue.trim() === ''
    || ratingValue<1 || ratingValue >5){
      alert('Invalid')
      return
    }

  const newMovie ={
    title : titleValue,
    image : imageURLValue,
    rating : ratingValue
  }

  movies.push(newMovie)
  console.log(movies)
  toggleMovieModal();
  clearMovieInput();

}


const backdropClickHandler = () => {
  toggleMovieModal();
};

startAddMovieButton.addEventListener('click', toggleMovieModal);
backdrop.addEventListener('click', backdropClickHandler);
cancelAddMovieButton.addEventListener('click', cancelAddMovieHandler);
confirmAddMovieButton.addEventListener('click',addMovieHandler)
