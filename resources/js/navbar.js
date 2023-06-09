const bars = document.querySelectorAll('.fa-bars-staggered')[0];
const links = document.querySelectorAll('.navbar-links-container')[0];
bars.addEventListener('click',()=>{
    bars.classList.toggle('fa-xmark');
    links.classList.toggle('active');
});