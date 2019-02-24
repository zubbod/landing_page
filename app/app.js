window.onscroll = function () {

    let menu = document.getElementById('menu');

    if (window.pageYOffset > 105) {
        menu.classList.add('fixed');
    } else {
        menu.classList.remove('fixed');
    }
};