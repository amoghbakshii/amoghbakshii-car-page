let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

window.onscroll = () => {
    menu.classList.remove('bx-x');
    navbar.classList.remove('active');
}

const sr = ScrollReveal({
    distance:'60px',
    duration: 2500,
    delay:400,
    reset:true
})
sr.reveal('.logo',{delay:100,origin:'top'})
sr.reveal('.navbar',{delay:100,origin:'top'})
sr.reveal('.text',{delay:100,origin:'top'})

sr.reveal('.home',{delay:100,origin:'top'})
sr.reveal('.heading',{delay:100,origin:'top'})

sr.reveal('.ride-container',{delay:100,origin:'top'})
sr.reveal('.services-container',{delay:100,origin:'top'})

sr.reveal('.about-container',{delay:100,origin:'top'})
sr.reveal('.reviews-container',{delay:100,origin:'top'})

sr.reveal('.newsletter input',{delay:100,origin:'top'})

sr.reveal('.newsletter',{delay:100,origin:'top'})
sr.reveal('.copyright',{delay:100,origin:'top'})

