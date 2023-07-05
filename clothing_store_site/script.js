// реализация открытия и закрытия меню по клику
const menuActive = document.querySelector('.menu-active'); // находим в html блок меню
const headerMenu = document.querySelector('.button-menu'); // находим кнопку бургера
// let menuClose = document.querySelector('.menu-close'); // находим кнопку крестика закрытия меню

function toggleMenu(){
    menuActive.classList.toggle('hidden'); // функция удаляет или устанавливает класс с названием 'hidden' в div с классом 'menu-active', то есть дописывает строку в html в нужное место
}

headerMenu.addEventListener('click', toggleMenu); // по клику на бургер срабатывает функция 