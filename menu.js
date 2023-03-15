const hb = document.querySelector('#hamburgerBtn');
const pw = document.querySelector('#pageWrapper');
hb.addEventListener('click', () => {
    pw.classList.toggle('moveOver');
});