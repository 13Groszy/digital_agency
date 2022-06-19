const burger = document.querySelector('#burger');
const menu = document.querySelector('#burgerMenu');

toggleBurger = () =>{
    menu.classList.toggle('-translate-x-[500%]');
    menu.classList.toggle('translate-x-0');
}