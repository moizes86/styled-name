const firstName = 'MOSHE',
  surname = 'MANTSUR',
  firstNameArr = firstName.split(''),
  surnameArr = surname.split('');
lettersArr = [];

let firstNameMarkup = '',
  surnameMarkup = '';

(function buildMarkup() {
  firstNameArr.forEach(
    (letter, idx) => (firstNameMarkup += `<p class=p${idx}>${letter}</p>`)
  );
  surnameArr.forEach(
    (letter, idx) => (surnameMarkup += `<p class=p${idx + 5}>${letter}</p>`)
  );
})();

function endAnimationWithStyle(i) {
  if (i == (firstName.length + surname.length - 1)){

    document.querySelector('.first-name')
    .firstChild.classList.add('bigger-letter');
    document.querySelector('.surname').firstChild.classList.add('bigger-letter');
    document.querySelector('.fancy-border').classList.add('fancy-border-animated');
  }
}

function animateLetters(i) {
  setTimeout(() => {
    document.querySelector(`.p${i}`).classList.add('animated');
    endAnimationWithStyle(i);
  }, i * 100);
}

window.onload = () => {
  const firstNameContainer = document.querySelector('.first-name');
  const surnameContainer = document.querySelector('.surname');

  firstNameContainer.insertAdjacentHTML('afterbegin', firstNameMarkup);
  surnameContainer.insertAdjacentHTML('afterbegin', surnameMarkup);

  for (let i = 0; i < firstName.length + surname.length; i++) {
    animateLetters(i);
  }
};
