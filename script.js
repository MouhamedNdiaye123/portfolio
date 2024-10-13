const menu = document.getElementById('menu-burger');
const navbar = document.getElementById('navbar');

// Toggle the burger menu
menu.addEventListener('click', () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
});

// Close navbar when a link is clicked
const navLinks = document.querySelectorAll('#navbar a'); // Sélectionner tous les liens dans la navbar

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        menu.classList.remove('bx-x'); // Revenir à l'état initial du menu burger
        navbar.classList.remove('active'); // Fermer la navbar
    });
});
