const btn = document.querySelector('.btn');
const parInv = document.querySelector('.par');
const input = document.querySelector('input');
const modal = document.querySelector('.modal');

function userMail(e) {
  e.preventDefault();

  let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  const notValid = input.value.match(pattern);
  console.log(notValid);

  if (!notValid || input.value == '') {
    parInv.classList.add('error');
    return false;
  } else {
    parInv.classList.remove('error');
    input.value = '';
    modal.classList.add('sucsess');
    setInterval(function () {
      modal.classList.remove('sucsess');
    }, 2000);
  }
}

btn.addEventListener('click', userMail);
input.addEventListener('click', () => parInv.classList.remove('error'));
