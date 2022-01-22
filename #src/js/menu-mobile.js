const iconMenu = document.querySelector('.menu__btn');
if (iconMenu) {
    const menuBody = document.querySelector('.menu__body');
    iconMenu.addEventListener("click", function (e) {

        if (iconMenu.classList.contains('.is-open')) {
            document.body.classList.remove('_lock');
            menuBody.classList.remove('_active');
        }
        else {
            document.body.classList.toggle('_lock');
            menuBody.classList.toggle('_active');
        }
    });
}

const arrow = document.querySelector('.more-arrow');
let submenu = document.querySelector('.hover-fix');

arrow.addEventListener("click", () => {
    if(arrow.classList.contains('active')){
        const li = document.querySelectorAll('.menu__item')[0];
        arrow.classList.remove('active');
        li.style.marginBottom = "0px";
        submenu.style.visibility = "collapse";
        submenu.style.opacity = "0";
    }
    else{
        arrow.classList.add('active');
        const li = document.querySelectorAll('.menu__item')[0];
        li.style.marginBottom = "373px";
        submenu.style.visibility = "visible";
        submenu.style.opacity = "1";
    }
})


