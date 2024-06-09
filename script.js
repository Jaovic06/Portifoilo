// JavaScript para funcionalidades dos botões
document.querySelectorAll('.like-button').forEach(button => {
    button.addEventListener('click', () => {
        alert('Você curtiu essa imagem!');
    });
});

document.querySelectorAll('.comment-button').forEach(button => {
    button.addEventListener('click', () => {
        alert('Você comentou nesta imagem!');
    });
});

document.querySelectorAll('.download-button').forEach(button => {
    button.addEventListener('click', () => {
        alert('Iniciando o download...');
    });
});
