const footerMenuItems = document.querySelectorAll('.mobile-footer__item');

for (let i = 0; i < footerMenuItems.length; i++) {
    footerMenuItems[i].addEventListener("click", () => {
        let subMenu = document.querySelectorAll('.submenu-footer')[i];
        if(!footerMenuItems[i].classList.contains("active")){
            footerMenuItems[i].classList.add("active");
            subMenu.style.display = "block"
            footerMenuItems[i].style.paddingBottom = `${subMenu.clientHeight + 20}px`;
            // subMenu.style.opacity = "1";
            // subMenu.style.visibility = "visible";
        }
        else{
            footerMenuItems[i].classList.remove("active");
            subMenu.style.display = "none"
            footerMenuItems[i].style.paddingBottom = `20px`;
            // subMenu.style.opacity = "0";
            // subMenu.style.visibility = "collapse";
        }
    })
}