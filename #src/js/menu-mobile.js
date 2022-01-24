const iconMenu = document.querySelector('.menu__btn');
const searchIcon = document.querySelector('.icon_search');
const searchLocation = document.querySelector('.mobile-location');
const searchPhone = document.querySelector('.mobile-phone');

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

const menu = document.querySelector('.menu3');
menu.addEventListener("click", () => {
    if(!menu.classList.contains("active")){
        menu.classList.add("active");
        searchLocation.style.display = "inline";
        searchIcon.style.display = "inline";
        searchPhone.style.display = "none";
        document.body.style.overflow = "hidden";
    }
    else{
        menu.classList.remove("active");
        searchLocation.style.display = "none";
        searchIcon.style.display = "none";
        searchPhone.style.display = "inline";
        document.body.style.overflow = "visible";
    }
})

const headerMenuItems = document.querySelectorAll('.phone-menu__item');

for (let i = 0; i < headerMenuItems.length; i++) {
    headerMenuItems[i].addEventListener("click", () => {
        let subHeaderMenu = document.querySelectorAll('.sublist-menu')[i];
        console.log(subHeaderMenu);
        if(!headerMenuItems[i].classList.contains("active")){
            headerMenuItems[i].classList.add("active");
            subHeaderMenu.style.display = "flex"
            headerMenuItems[i].style.paddingBottom = `${subHeaderMenu.clientHeight + 20}px`;
            // subMenu.style.opacity = "1";
            // subMenu.style.visibility = "visible";
        }
        else{
            headerMenuItems[i].classList.remove("active");
            subHeaderMenu.style.display = "none"
            headerMenuItems[i].style.paddingBottom = `20px`;
            // subMenu.style.opacity = "0";
            // subMenu.style.visibility = "collapse";
        }
    })
}

