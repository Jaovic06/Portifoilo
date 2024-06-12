// script.js

document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('theme-toggle');
    themeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark');
    });

    // Validate the contact form
    const contactForm = document.querySelector('.contact-form form');
    contactForm.addEventListener('submit', (event) => {
        const email = contactForm.querySelector('input[name="email"]').value;
        const name = contactForm.querySelector('input[name="name"]').value;
        const message = contactForm.querySelector('textarea[name="message"]').value;

        if (!email || !name || !message) {
            alert('Por favor, preencha todos os campos.');
            event.preventDefault();
        }
    });
});
