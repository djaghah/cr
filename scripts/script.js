document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('button').forEach(button => {
        button.addEventListener('click', () => {
            window.location.href = `${button.id}.html`;
        });
    });
});
