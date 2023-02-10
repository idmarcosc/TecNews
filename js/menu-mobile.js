function menuMobile() {
    let menuMobilee = document.querySelector('.nav-bar');
    let iconMenu = document.getElementById("icon-menu").innerHTML;
    if(menuMobilee.classList.contains('open')) {
        menuMobilee.classList.remove('open');
    } else {
        menuMobilee.classList.add('open');
    }
    if (iconMenu == 'menu') {
        document.getElementById("icon-menu").innerHTML = "close";
    } else {
        document.getElementById("icon-menu").innerHTML = "menu";
    }
}
