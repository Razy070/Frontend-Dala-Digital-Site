
document.addEventListener('DOMContentLoaded', function() {
    const button = document.querySelector('.navbar-flex');
    const menu = document.getElementById('menu');

    button.addEventListener('click', () => {
        if (menu.style.display === 'flex') {
            menu.style.display = 'none';
        } else {
            menu.style.display = 'flex';
        }
    });

});
