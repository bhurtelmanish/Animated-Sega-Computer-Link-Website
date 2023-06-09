// Animation for Navbar
// anime({
//     targets: '.navbar-logo',
//     translateX: [-300 , 0],
//     duration: 1000,
//     easing: 'easeOutExpo'
// });
// anime({
//     targets: '.navbar-links',
//     translateX: [-500 , 0],
//     duration: 1300,
//     easing: 'easeOutExpo'
// });
// anime({
//     targets: '.navbar-contact-btn',
//     translateX: [400 , 0],
//     duration: 800,
//     easing: 'easeOutExpo'
// });

// Intersection Observer Function declaration
const observer = new IntersectionObserver(entries=>{
    entries.forEach(entry=>{
        if(entry.isIntersecting){
            entry.target.classList.add('show');
        }
        else{
            entry.target.classList.remove('show');
        }
    });
});
const hiddenElements1 = document.querySelectorAll('.hidden1');
const hiddenElements2 = document.querySelectorAll('.hidden2');
hiddenElements1.forEach((element)=>{
    observer.observe(element);
});
hiddenElements2.forEach((element)=>{
    observer.observe(element);
});