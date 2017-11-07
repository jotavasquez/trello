
var boton = document.getElementById("nameList");

function showMenu() {
    var menu = document.getElementById('nameInput');
    
    if (menu.classList.contains("disable-menu")) {
        menu.classList.remove("disable-menu");
        menu.classList.add("enable-menu");
        document.getElementById("nameList").setAttribute("id", "nameListWhite");
        console.log("mostrar");
    } else {
        console.log("ocultar");
        document.getElementById("nameListWhite").setAttribute("id", "nameList");
        menu.classList.remove("enable-menu");
        menu.classList.add("disable-menu");
    }
}

boton.addEventListener("click", showMenu);
