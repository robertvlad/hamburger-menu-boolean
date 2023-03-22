// Apertura del menu toggle
const open_menu_button = document.getElementById('open-menu-toggle');

open_menu_button.addEventListener('click', function() {

    document.querySelector('.hamburger-menu').classList.add('active');
});

// Chiusura del menu toggle
const close_menu_button = document.getElementById('close-menu-toggle');

close_menu_button.addEventListener('click', function() {

    document.querySelector('.hamburger-menu').classList.remove('active');
});