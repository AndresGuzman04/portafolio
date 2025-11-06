// Efecto de scroll suave
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
        });
    });
});

// Efecto de header al hacer scroll
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 100) {
        header.style.padding = '1rem 2rem';
        header.style.backgroundColor = 'rgba(2, 12, 27, 0.95)';
    } else {
        header.style.padding = '1.5rem 2rem';
        header.style.backgroundColor = 'rgba(2, 12, 27, 0.85)';
    }
});