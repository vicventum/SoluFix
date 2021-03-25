import ScrollReveal from "../vendor/scrollreveal/scrollreveal";

const sr = ScrollReveal({
    duration: 1200,
    reset: true
})

// Navbar
sr.reveal('.navbar', {
    origin: 'top',
    distance: '100%',
    easing: 'ease-out',
    reset: false
})

// Hero
sr.reveal('.hero-animate', {
    delay: 1000,
    easing: 'ease',
    interval: 500,
    useDelay: 'onload',
    reset: false
})

// About - Where
// sr.reveal('.about .red-text', {
//     origin: 'center',
//     // distance: '100px',
//     scale: 2,
// })
sr.reveal('.about .cards__card *:not(:first-child), .some__content *:not(:first-child)', {
    origin: 'bottom',
    distance: '20px',
    interval: 100,
})

// Services
sr.reveal('.services .card', {
    origin: 'right',
    distance: '50px',
    easing: 'ease-in-out',
    interval: 200,
})
sr.reveal('.carousel', {
    origin: 'bottom',
    distance: '50px',
    easing: 'ease-in-out',
})
// sr.reveal('.slider', {
//     origin: 'right',
//     distance: '100px',
//     easing: 'ease-in-out',
// })

// Blog
// Services
sr.reveal('.blog .card', {
    origin: 'bottom',
    distance: '50px',
    easing: 'ease-in-out',
    // viewFactor: .2,
    interval: 200,
})

// Footer
// sr.reveal('.footer__link', {
//     duration: 800,
//     origin: 'bottom',
//     distance: '20px',
//     easing: 'ease-in-out',
//     // viewFactor: .2,
//     interval: 100,
// })
sr.reveal('.form form', {
    duration: 1000,
    origin: 'bottom',
    distance: '10px',
    scale: 1.2,
    easing: 'ease-in-out',
    reset: false
})