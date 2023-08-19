const btnMobile = document.getElementById("btn-mobile"); //chama o btn-mobile
const menu = document.getElementsByClassName("menu"); //chama o menu

function toggleMenu(event) {
    if (event.type === "touchstart") event.preventDefault();
    const nav = document.getElementById("nav");
    nav.classList.toggle("active");
    const active = nav.classList.contains("active");
    event.currentTarget.setAttribute("aria-expanded", active);
    if (active) {
        event.currentTarget.setAttribute("aria-label", "Fechar Menu");
    } else {
        event.currentTarget.setAttribute("aria-label", "Abrir Menu");
    }
}



btnMobile.addEventListener("click", toggleMenu);
btnMobile.addEventListener("touchstart", toggleMenu);


// Menu fecha ao ser clicado
const menuf1 = document.querySelector('.btn1');
const menuf2 = document.querySelector('.btn2');
const menuf3 = document.querySelector('.btn3');
menuf1.addEventListener('click', function () {
    nav.classList.remove('active');
});
menuf2.addEventListener('click', function () {
    nav.classList.remove('active');
});
menuf3.addEventListener('click', function () {
    nav.classList.remove('active');
});