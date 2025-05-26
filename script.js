document.addEventListener('DOMContentLoaded', function () {
    const burgerMenu = document.getElementById('burger-menu');
    const navList = document.querySelector('.nav-list');

    // Example: Toggle a class on the body to open/close a menu
    burgerMenu.addEventListener('click', function () {
        navList.classList.toggle('menu-open');
    });
});

const nameElement = document.getElementById('name');
const name = "Название компании";
nameElement.textContent = name;