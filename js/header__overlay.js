
const openButton = document.getElementById('openMenu');
const closeButton = document.getElementById('closeMenu');
const overlay = document.querySelector('.body__overlay');
const modalMenusNone = document.querySelectorAll('.modal-menu--none');
const modalMenusContents = document.querySelectorAll('.modal-menu--contents');
const header = document.querySelector('.header');

function openMenu() {
  modalMenusNone.forEach(element => {
    element.style.display = 'flex';
  });
  modalMenusContents.forEach(element => {
    element.style.display = 'flex';
  });
  overlay.style.display = 'block';

  if (header) {
    header.classList.add('header--hide-after');
  }
}

function closeMenu() {
  modalMenusNone.forEach(element => {
    element.style.display = 'none';
  });
  modalMenusContents.forEach(element => {
    element.style.display = 'contents';
  });
  overlay.style.display = 'none';

  if (header) {
    header.classList.remove('header--hide-after');
  }
}

openButton.addEventListener('click', openMenu);
closeButton.addEventListener('click', closeMenu);

overlay.addEventListener('click', closeMenu);
