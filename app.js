console.log('hello');

const readMoreBtn = document.getElementById('readMoreBtn');
const readMoreDiv = document.getElementById('readMoreToggle');

readMoreBtn.addEventListener('click', (e) => {
  e.preventDefault;

  readMoreDiv.classList.toggle('toggle-active');
});

// ---------------------------------------------------------

const btn = document.querySelector('.read_more_btn');
const text = document.querySelector('.infoReadMore');
const infoContainer = document.querySelector('.infoContainer');

infoContainer.addEventListener('click', (e) => {
  const current = e.target;

  const isReadMoreBtn = current.className.includes('read_more_btn');
  if (!isReadMoreBtn) return;
  const currentText = e.target.parentNode.querySelector('.infoReadMore');

  currentText.classList.toggle('infoReadMore--open');

  current.textContent = current.textContent.includes('Read More...')
    ? 'Read Less...'
    : 'Read More...';
});
