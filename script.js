document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;
    const backToTopButton = document.getElementById('back-to-top');
    const loader = document.getElementById('loader');

    themeToggle.addEventListener('click', () => {
        body.classList.toggle('dark');
        localStorage.setItem('dark-mode', body.classList.contains('dark'));
    });

    // Restore theme on page load
    if (localStorage.getItem('dark-mode') === 'true') {
        body.classList.add('dark');
    }

    // Back to top functionality
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

    // Show loader on page load
    loader.classList.add('active');
    window.addEventListener('load', () => {
        loader.classList.remove('active');
    });
});
