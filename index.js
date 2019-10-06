const navbar = document.querySelector('nav a')

const stopNav = document.querySelector('nav');
stopNav.addEventListener('click', (event) => {
    event.stopDefault();
})

// navbar.addEventListener('click', () => {
//     const header = document.querySelector('header')
//     header.style.opacity = 0;
// })

// navbar.addEventListener('mouseleave', () => {
//     const header = document.querySelector('header')
//     header.style.display = 'flex';
// })

