document.addEventListener('DOMContentLoaded', function () {
    const burgerMenu = document.getElementById('burger-menu');
    const navList = document.querySelector('.nav-list');
    const burgerBar = document.querySelectorAll('.burger-bar');

    // Example: Toggle a class on the body to open/close a menu
    burgerMenu.addEventListener('click', function () {
        burgerMenu.classList.toggle('burger-open');
        navList.classList.toggle('menu-open');
        burgerBar.forEach(bar => {
            bar.classList.toggle('active');
        });
    });
});

const nameElements = document.querySelectorAll('#name');
const name = "VAYRO";
nameElements.forEach(nameEl => {
    nameEl.textContent = name;
})