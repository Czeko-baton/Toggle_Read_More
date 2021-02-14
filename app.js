console.log('hello');

const readMoreBtn = document.getElementById('readMoreBtn');
const readMoreDiv = document.getElementById('readMoreToggle');

readMoreBtn.addEventListener('click', (e) => {
  e.preventDefault;
  // const targer = e.target;

  readMoreDiv.classList.toggle('toggle-active');
});

// e.preventDefault();
// const current = e.target;
// const isReadMoreBtn = current.className.includes('readMoreBtn');

// if (!isReadMoreBtn) return;

// const currentText = e.target.parentNode.querySelector('.readMoreDiv');
// currentText.classList.toggle('toggle-active');
