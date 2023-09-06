const addMovieModal = document.getElementById('add-modal');
// const addMovieModal = document.querySelector('#add-modal');
// const addMovieModal = document.body.children[1];
const startAddMovieButton = document.querySelector('header button');
// const startAddMovieButton = document.querySelector('header').lastElementChild;

const cancelAddMovieButton = document.querySelector('#add-modal').children[1].firstElementChild
console.log(cancelAddMovieButton)
const cancelAddMovieButton2 = document.querySelector('.btn--passive');
console.log(cancelAddMovieButton2)

const backdrop = document.getElementById('backdrop')
const bakcdrop2 = document.body.firstElementChild
console.log(backdrop)
console.log(bakcdrop2)

const toggleBackdrop = () => {
  backdrop.classList.toggle('visible')
}

const toggleMovieModal = () => {
  addMovieModal.classList.toggle('visible')
  toggleBackdrop();
}

const cancelAddMovie = () => {
  toggleMovieModal();
}

const backdropClickHandler = () => {
  toggleMovieModal();
}

startAddMovieButton.addEventListener('click', toggleMovieModal)
backdrop.addEventListener('click',backdropClickHandler)
cancelAddMovieButton.addEventListener('click',cancelAddMovie)







