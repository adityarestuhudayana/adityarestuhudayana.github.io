const menu = document.getElementById('menu');
const listMenu = document.getElementById('listmenu');

menu.addEventListener('click', function () {
    listMenu.classList.toggle('translate-x-[100%]');
});