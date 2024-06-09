// JavaScript para funcionalidades dos bot�es
document.querySelectorAll('.like-button').forEach(button => {
    button.addEventListener('click', () => {
        alert('Voc� curtiu essa imagem!');
    });
});

document.querySelectorAll('.comment-button').forEach(button => {
    button.addEventListener('click', () => {
        alert('Voc� comentou nesta imagem!');
    });
});

document.querySelectorAll('.download-button').forEach(button => {
    button.addEventListener('click', () => {
        alert('Iniciando o download...');
    });
});
