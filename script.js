const toggleElem = document.querySelector('.toggle');
const ulElem = document.querySelector('.list');

function revealNav() {
  if (ulElem.classList.contains('js-reveal')) {
    ulElem.classList.remove('js-reveal');
    ulElem.classList.add('js-hidden');
  } else {
    ulElem.classList.remove('js-hidden');
    ulElem.classList.add('js-reveal');
  }
}

toggleElem.addEventListener('click', revealNav);
