const lenin = document.querySelector('.lenin')
const menu = document.querySelector('.menu-navegacion')

lenin.addEventListener('click', () => {
    menu.classList.toggle('spread')
});

window.addEventListener('click', (e) => {
    if (menu.classList.contains('spread')
    && e.target !== menu && e.target !== lenin){
    menu.classList.toggle('spread')
    }
});