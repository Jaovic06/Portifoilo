document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;

    themeToggle.addEventListener('click', () => {
        body.classList.toggle('light-theme');
        if (body.classList.contains('light-theme')) {
            themeToggle.textContent = '🌙';
        } else {
            themeToggle.textContent = '☀️';
        }
    });

    const backToTopButton = document.getElementById('back-to-top');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 200) {
            backToTopButton.style.display = 'block';
        } else {
            backToTopButton.style.display = 'none';
        }
    });

    backToTopButton.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    const form = document.querySelector('form');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Mensagem enviada com sucesso!');
        form.reset();
    });

    const loading = document.getElementById('loading');
    window.addEventListener('load', () => {
        loading.style.display = 'none';
    });

    const datetime = document.getElementById('datetime');
    const now = new Date();
    datetime.textContent = `Data e Hora: ${now.toLocaleDateString()} ${now.toLocaleTimeString()}`;
});
