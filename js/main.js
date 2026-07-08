// Smooth scroll para enlaces del menú
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Validación básica del formulario
document.querySelector('form').addEventListener('submit', function(e) {
    const email = this.querySelector('input[type="email"]').value;
    if (!email.includes('@')) {
        e.preventDefault();
        alert('Por favor ingresa un email válido.');
    }
});