// Получаем элементы
const openButton = document.getElementById('openMenu');
const closeButton = document.getElementById('closeMenu');
const overlay = document.querySelector('.body__overlay');
const modalMenusNone = document.querySelectorAll('.modal-menu--none');
const modalMenusContents = document.querySelectorAll('.modal-menu--contents');
const header = document.querySelector('.header'); // предполагается, что есть такой элемент

// Функция для открытия меню
function openMenu() {
  // Показываем меню
  modalMenusNone.forEach(element => {
    element.style.display = 'flex';
  });
  modalMenusContents.forEach(element => {
    element.style.display = 'flex';
  });
  overlay.style.display = 'block';

  // Скрываем ::after у .header__logo
  if (header) {
    header.classList.add('header--hide-after');
  }
}

// Функция для закрытия меню
function closeMenu() {
  // Скрываем меню
  modalMenusNone.forEach(element => {
    element.style.display = 'none';
  });
  modalMenusContents.forEach(element => {
    element.style.display = 'contents';
  });
  overlay.style.display = 'none';

  // Показываем ::after у .header__logo
  if (header) {
    header.classList.remove('header--hide-after');
  }
}

// Назначаем обработчики событий
openButton.addEventListener('click', openMenu);
closeButton.addEventListener('click', closeMenu);

// Добавляем обработчик для закрытия по клику на overlay
overlay.addEventListener('click', closeMenu);