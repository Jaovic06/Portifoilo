// script.js

document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('.contact-form form');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Mensagem enviada com sucesso!');
        form.reset();
    });
});
