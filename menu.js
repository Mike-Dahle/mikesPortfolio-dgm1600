const largeScreen = window.matchMedia("(min-width: 801px)");

const hb = document.querySelector('#hamburgerBtn');
const cb = document.querySelector('#closeBtn');
const nl = document.querySelector('.nav-list')
hb.addEventListener('click', () => {
    nl.classList.toggle('hidden');
    hb.style.display = "none";
});
cb.addEventListener('click', () => {
    nl.classList.toggle('hidden');
    hb.style.display = "block";
});

if (largeScreen.matches && hb.style.display === "block" ) {
    hb.style.display = "none";
}