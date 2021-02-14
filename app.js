console.log('hello');

const readMoreBtn = document.getElementById('readMoreBtn');
const readMoreDiv = document.getElementById('readMoreToggle');

readMoreBtn.addEventListener('click', (e) => {
  e.preventDefault;

  readMoreDiv.classList.toggle('toggle-active');
});
