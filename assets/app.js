
//llamo al elemento boton añadir lista
var btn = document.getElementById("btn");

// tomo contenedor div
var saveListName = document.getElementById("addListName");


// asigno evento al boton agregar lista
btn.addEventListener('click', function () {
    console.log("funciona el boton"); //probando funcionamiento
    //saco el elemento boton añadir lista 
    saveListName.removeChild(btn);
    // agrego mpadding al div addListName
    addListName.style.padding = "0.3em";

    //creo un elemento input
    var inputName = document.createElement("input");
    //pongo nombre id al input
    inputName.setAttribute("id", "inputName");
    //pongo el texto de ejemplo en el input
    inputName.setAttribute('placeholder', 'Añadir una Lista...');
    //pongo el input en el div contenedor addListName
    saveListName.appendChild(inputName);

    //creo  boton guardar 
    var btnSaveName = document.createElement("button");
    //agrego nombre id al button
    btnSaveName.setAttribute('id','btnSaveName');
    //pongo texto al boton
    btnSaveName.innerHTML = "Guardar";
    //pongo el boton en el div contenedor addListName
    saveListName.appendChild(btnSaveName);

    // asigno evento al boton guardar nombre de lista:
    var btnSaveName = document.getElementById("btnSaveName");

        //funcion guardar nombre de lista
        btnSaveName.addEventListener('click', function () {
            console.log("funcion nombre lista"); //probando funcionamiento
            //tomar el texto del input
            var nameList = document.getElementById("inputName").value;
            console.log(nameList);

            //crear div padre que tenga el nombre
            var divNameList = document.createElement('div');
            //agregar clase al div
            divNameList.setAttribute("class", "nameList");
            //crea elemento p para el nombre de lista desde input
            var titleList = document.createElement('h3');
            //crea nodo de texto para el nombre de lista desde input
            var nodeNameList = document.createTextNode(nameList);
            console.log(nodeNameList + "probando"); //probando funcionamiento
            //poner nodo de texto como hijo del elemento h3 titleList
            titleList.appendChild(nodeNameList);
            //poner titleList como hijo de divNameList
            divNameList.appendChild(titleList);
            //poner divNameList como hijo de addListName
            addListName.appendChild(divNameList);
            //poner arriba el titulo
            addListName.insertBefore(divNameList, inputName);

            //valida que textarea tenga un mensaje
            if (nameList.length == 0 || nameList == null) {
                return false;
            };

            //crear elemento boton
            var btnNewCard = document.createElement("button");

            //agrego nombre id al button
            btnNewCard.setAttribute('id', 'btnNewCard');
            //pongo texto al boton
            btnNewCard.innerHTML = "Añadir una Tarjeta...";
            
            //pongo el boton en el div contenedor 
            saveListName.appendChild(btnNewCard);
            
            //elimino input y boton guardar
            addListName.removeChild(inputName);
            addListName.removeChild(btnSaveName);

            //asigno un evento al boton añadir una tarjeta
            var newCard = document.getElementById("btnNewCard");

                //funcion guardar nueva tarjeta
                newCard.addEventListener('click', function () {
                console.log("nueva tarjeta") //probando funcionamiento
                });

        });

});









/* Primer Intento!

var boton = document.getElementById("btn");

//despliega el menu para el nombre de la lista
function showMenu() {
    var menu = document.getElementById('nameInput');
    //muestra el input al presionar el boton
    if (menu.classList.contains("disable-menu")) { //selecciona la clase diseble-menu
        menu.classList.remove("disable-menu"); // cambia la clase a enable menu
        menu.classList.add("enable-menu");
        document.getElementById("nameList").setAttribute("id", "nameListWhite"); // toma el elemento get element y atributos en id
        boton.classList.add("disable-menu"); //cambia el boton a fondo blanco
        console.log("muestra"); 
        var titleForm = document.getElementById("form")[0];//toma el primer div de form
        console.log(titleForm);

    } else {
        console.log("oculta"); 
        document.getElementById("nameListWhite").setAttribute("id", "nameList"); // cambia el tributo de nameListWhite a Name List para agrandar achicar boton, no me funcionó
        menu.classList.remove("enable-menu"); // quita la clase enable-menu 
        menu.classList.add("disable-menu"); //pone la clase disable.menu para volver el boton al espacio inicial
    }
}

boton.addEventListener("click", showMenu);

//funcionn que guarda el nombre de la lista
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
*/