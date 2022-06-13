var cont = 0;

function addelemento() {
    /*inserta las opciones en el select*/ 
    document.getElementById("selectel").innerHTML += "<option value="+cont+" selected> Elemento - "+cont+"</option>";
    
}

function eliminar() {
    /*para remover el elemento*/ 
    let id ="el"+ document.getElementById("selectel").value;
    document.getElementById(id).remove();
    /*para remover el elemento seleccionado de la lista desplegable*/ 
    let x = document.getElementById("selectel");
    x.remove(x.selectedIndex);

    resetvalores();
}

function agregarbtn() {
    cont = cont + 1;
    /*agrega boton en el body*/
    document.getElementById("body").innerHTML += '<button id="el' + cont + '">Boton</button>';
    /*se vuelve a mostrar color text, color letra, tamaño de letra, y se oculta el tamaño de la imagen*/ 
    resetvalores();
    /*se agrega el elemento boton como opcion en el select*/ 
    addelemento();
}

function agregarinput() {
    cont = cont + 1;
    /*agrega input en el body*/
    document.getElementById("body").innerHTML += '<input type="text" id="el' + cont + '">';
    /*se vuelve a mostrar color text, color letra, tamaño de letra, y se oculta el tamaño de la imagen*/ 
    resetvalores();
    /*se agrega el elemento input como opcion en el select*/ 
    addelemento();
}
function agregartextarea() {
    cont = cont + 1;
     /*agrega textarea en el body*/
    document.getElementById("body").innerHTML += ' <textarea name="" id="el' + cont + '" cols="30" rows="10"></textarea>';
    /*se vuelve a mostrar color text, color letra, tamaño de letra, y se oculta el tamaño de la imagen*/ 
    resetvalores();
    /*se agrega el elemento textarea  como opcion en el select*/
    addelemento();
}
function agregarlista() {
    cont = cont + 1;
    /*agrega lista en el body*/
    document.getElementById("body").innerHTML += `<ol id="el` + cont + `">
                                            <li>PRIMERO</li>
                                            <li>SEGUNDO</li>
                                            <li>TERCERO</li>
                                        </ol> `;
    /*se vuelve a mostrar color text, color letra, tamaño de letra, y se oculta el tamaño de la imagen*/ 
    resetvalores();
    /*se agrega el elemento lista como opcion en el select*/
    addelemento();
}

function agregartabla() {
    cont = cont + 1;

    document.getElementById("body").innerHTML += `
                            <table width="50%" id="el` + cont + `">
                            <tr>
                                <th>A</th>
                                <th>B</th>
                                <th>C</th>
                            </tr>
                            <tr>
                                <th>A</th>
                                <th>B</th>
                                <th>C</th>
                            </tr>
                            <tr>
                                <th>A</th>
                                <th>B</th>
                                <th>C</th>
                            </tr>
                            </table>`;

    resetvalores();

    addelemento();
}

function agregarlink() {
    cont = cont + 1;
    document.getElementById("body").innerHTML += '<a href="https://www.fotosdememes.com/wp-content/uploads/2021/09/Ayudame-por-favor.jpg" target="_blank" id="el' + cont + '">Esto es un link</a>';
    resetvalores();
    addelemento();
}

function agregarselect() {
    cont = cont + 1;
    document.getElementById("body").innerHTML += `<select id="el` + cont + `">
        < option disabled selected > --------------</option >
        <option >Opcion 1</option>
        <option >Opcion 2</option>
        <option >Opcion 3</option>
        <option >Opcion 4</option>
        <option >Opcion 4</option>
        </select > `;
    resetvalores()
    addelemento()
}
function agregarimagen() {
    cont = cont + 1;
    document.getElementById("body").innerHTML += '<img class="unimg" src="img_tree.png" alt="imagen" id="el' + cont + '">';

    document.getElementById("colortext").style.display = "none";
    document.getElementById("colorletra").style.display = "none";
    document.getElementById("tama").style.display = "none";
    document.getElementById("tamaimg").style.display = "";
    addelemento()
}

function resetvalores() {
    /* muestran color text, color letra, tamaño de letra, y se oculta el tamaño de la imagen* */ 
    document.getElementById("colortext").style.display = "";
    document.getElementById("colorletra").style.display = "";
    document.getElementById("tama").style.display = "";
    document.getElementById("tamaimg").style.display = "none";
}

function validar() {
    /*se guarda el valor del select y se almacena como un id en la variable*/ 
    let id ="el"+ document.getElementById("selectel").value;
    /*trae el nombre de la clase de ese id*/
    let className = document.getElementById(id).className;
    /*si es una imagen, oculta esos opciones y muestra la de las imagenes */ 
    if (className == "unimg") {
        document.getElementById("colortext").style.display = "none";
        document.getElementById("colorletra").style.display = "none";
        document.getElementById("tama").style.display = "none";
        document.getElementById("tamaimg").style.display = "";
    }else{
        resetvalores();
    }
}


function tamano(tamano) {
    /*se guarda el valor del select en una variable*/ 
    let select = document.getElementById("selectel").value;
     /* se le asigna el tamaño al elemento que lleva ese id */
    if (tamano == 'pequeno') {
        document.getElementById("el" + select).style.fontSize = "xx-small";
    } else if (tamano == 'mediano') {
        document.getElementById("el" + select).style.fontSize = "medium";
    } else {
        document.getElementById("el" + select).style.fontSize = "xx-large";
    }
}
function tamaimg(tamaimg) {
    let select = document.getElementById("selectel").value;
    if (tamaimg == 'pequeno') {
        document.getElementById("el" + select).style.width = "auto";
        document.getElementById("el" + select).style.height = "20%";
    } else if (tamaimg == 'mediano') {
        document.getElementById("el" + select).style.width = "auto";
        document.getElementById("el" + select).style.height = "50%";
    } else {
        document.getElementById("el" + select).style.width = "auto";
        document.getElementById("el" + select).style.height = "80%";
    }
}

function color() {
    let select = document.getElementById("selectel").value;
    var color = document.getElementById('color').value;
    document.getElementById("el" + select).style.background = color;
}

function colorletra() {
    let select = document.getElementById("selectel").value;
    var colorletra = document.getElementById('colorletra').value;
    document.getElementById("el" + select).style.color = colorletra;
}

function border() {
    let select = document.getElementById("selectel").value;
    var borde = document.getElementById('border').value;
    document.getElementById("el" + select).style.border = borde;
}
function radius(radius) {
    /*se guarda el valor del select en una variable*/
    let select = document.getElementById("selectel").value;
    /*se obtiene el border radius actual del elemnto con ese id, con split parte el px, y solo se garda el numero */
    let a = document.getElementById("el" + select).style.borderRadius.split("px");

    console.log(a[0]);
    /*si no tiene valor se le asigna*/ 
    if (a[0] == "") {
        a[0] = 0;
    }

    /*si el valor del parametro es igual a uno se va restando el raidus*/
    if (radius == 1) {
        document.getElementById("el" + select).style.borderRadius = parseInt(a[0]) - 1 + "px";
    } else {
        document.getElementById("el" + select).style.borderRadius = parseInt(a[0]) + 1 + "px";

    }

}

function colorborde() {
    let select = document.getElementById("selectel").value;
    var colorborde = document.getElementById('colorborde').value;
    document.getElementById("el" + select).style.borderColor = colorborde;
}

function play() {
    let select = document.getElementById("selectel").value;
    document.getElementById("el" + select).classList.add("animacion");
    document.getElementById("el" + select).style.animationPlayState = "running";
}

function pause() {
    let select = document.getElementById("selectel").value;
    document.getElementById("el" + select).style.animationPlayState = "paused";
}

