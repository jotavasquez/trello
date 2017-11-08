
var boton = document.getElementById("btn");

//despliega el menu para el nombre de la lista
function showMenu() {
    var menu = document.getElementById('nameInput');
    
    if (menu.classList.contains("disable-menu")) {
        menu.classList.remove("disable-menu");
        menu.classList.add("enable-menu");
        document.getElementById("nameList").setAttribute("id", "nameListWhite");
        boton.classList.add("disable-menu");
        console.log("muestra");
        var titleForm = document.getElementById("form")[0];
        console.log(titleForm);

    } else {
        console.log("oculta");
        document.getElementById("nameListWhite").setAttribute("id", "nameList");
        menu.classList.remove("enable-menu");
        menu.classList.add("disable-menu");
    }
}

boton.addEventListener("click", showMenu);

//guarda el nombre de la lista
var savebtn = document.getElementById("save");

function saveListName() {

    //tenemos que tomar el texto ingresado en el input
    var name = document.getElementById('nameListWhite').value;
        console.log(name);

    //limpiar el input
     document.getElementById('nameListWhite').value = '';
     //contenedor que esta en el html
    var cont = document.getElementById('form');
        console.log(cont);

    //creamos el div que contiene el titulo
    var titleDiv = document.createElement('div');
        console.log(titleDiv);

    //nodos de texto del textarea
    var textTitle = document.createTextNode(name);
            console.log(textTitle);

    //agregar el texto
    var containerElementP = document.createElement('p');
    console.log(containerElementP);
    containerElementP.appendChild(textTitle);
    titleDiv.appendChild(containerElementP);
    cont.appendChild(titleDiv);

    // llevar nodo arriba, como primer hijo arriba del input
    //variable nodo padre
    var parent = document.getElementById("nameInput");
    // variable nodo de referencia input
    var nameList= document.getElementById("nameList");
    //variable con la posición a colocar
    var insertName = parent.insertBefore(containerElementP, nameList);
    console.log(insertName);
}

// correr funcion
savebtn.addEventListener("click", saveListName);
