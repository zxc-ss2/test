function backToTop() {
    if (window.pageYOffset > 0) {
        window.scrollBy(0, -80);
        setTimeout(backToTop, 0);
    }
}

let goTopBtn = document.querySelector('.footer__go-back');

goTopBtn.addEventListener('click', backToTop);