window.onscroll = function () {
    let menu = document.getElementById('menu');
    
    if (window.scrollY > 105) {
        menu.classList.add('fixed');
    } else {
        menu.classList.remove('fixed');
    }
};