const menu = document.getElementById('menu-burger')
const navbar = document.getElementById('navbar')

menu.addEventListener('click',()=>{
    menu.classList.toggle('bx-x')
    navbar.classList.toggle('active')
})