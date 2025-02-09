document.addEventListener('DOMContentLoaded', function() {
    const hamburgerMenu = document.getElementById('hamburger-menu');
    const nav = document.getElementById('navbar');

    hamburgerMenu.addEventListener('click', function() {
        nav.classList.toggle('active');
    });

    nav.addEventListener('click', function() {
        nav.classList.remove('active');
    });
});