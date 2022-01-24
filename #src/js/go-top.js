function backToTop() {
    if (window.pageYOffset > 0) {
        window.scrollBy(0, -80);
        setTimeout(backToTop, 0);
    }
}

let goTopBtn = document.querySelectorAll('.go-back');
for (let i = 0; i < goTopBtn.length; i++) {
    goTopBtn[i].addEventListener('click', backToTop);
}