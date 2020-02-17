let menuButton = document.getElementById("menu-button");
let menu = document.getElementById("menu_continaer");

menuButton.addEventListener("click", function() {
    if(menu.style.display == 'none'){
        menu.style.display = 'flex';
        menuButton.src = "images/left-arrow.png"
    }else{
        menu.style.display = 'none';
        menuButton.src = "images/menu_.png"
    }
})


 window.addEventListener('resize', function() {
    menu.style.display = 'flex';
 });