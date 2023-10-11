
document.addEventListener('DOMContentLoaded', function() {
    const button = document.querySelector('.navbar-flex');
    const menu = document.getElementById('menu');
    const langSwitch = document.getElementById('lang-switch')


    button.addEventListener('click', () => {
        if (menu.style.display === 'flex') {
            menu.style.display = 'none';
            langSwitch.style.display = 'flex'

        } else {
            menu.style.display = 'flex';
            langSwitch.style.display = 'none'
        }
    });

});
