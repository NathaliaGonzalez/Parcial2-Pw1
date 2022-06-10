var cont = 0;

function agregarbtn() {
    cont = cont + 1;
    document.getElementById("body").innerHTML += '<button id="el' + cont + '">Boton</button>';

}

function agregarinput() {
    cont = cont + 1;
    document.getElementById("body").innerHTML += '<input type="text" id="el' + cont + '">';

}

function agregartabla() {
    cont = cont + 1;
    document.getElementById("body").innerHTML += `<TABLE BORDER WIDTH="50%" id="el` + cont + `">
    <TR >
		<TD>A</TD> <TD>B</TD> <TD>C</TD>
	</TR>
	<TR>
		<TD>D</TD> <TD>E</TD> <TD>F</TD>
	</TR>
</TABLE>`;
}

function agregarlink() {
    cont = cont + 1;
    document.getElementById("body").innerHTML += '<a href="https://www.fotosdememes.com/wp-content/uploads/2021/09/Ayudame-por-favor.jpg" target="_blank" id="el' + cont + '">Esto es un link</a>';

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

}
function agregarimagen() {
    cont = cont + 1;
    document.getElementById("body").innerHTML += '<img src="img_tree.png" alt="imagen" id="el' + cont + '">';

}


function tamano(tamano) {
    if (tamano == 'pequeno') {
        document.getElementById("el" + cont).style.fontSize = "xx-small";
    } else if (tamano == 'mediano') {
        document.getElementById("el" + cont).style.fontSize = "medium";
    } else {
        document.getElementById("el" + cont).style.fontSize = "xx-large";
    }
}

function color() {
    var color = document.getElementById('color').value;
    document.getElementById("el" + cont).style.background = color;
}

function colorletra() {
    var colorletra = document.getElementById('colorletra').value;
    document.getElementById("el" + cont).style.color = colorletra;
}

function border() {
    var borde = document.getElementById('border').value;
    document.getElementById("el" + cont).style.border = borde;
}
function radius() {
    var radio = document.getElementById('radius').value;
    document.getElementById("el" + cont).style.borderRadius = radio;
}

function colorborde() {
    var colorborde = document.getElementById('colorborde').value;
    document.getElementById("el" + cont).style.borderColor = colorborde;
}

function play() {
    document.getElementById("el" + cont).classList.add("animacion");
    document.getElementById("el" + cont).style.animationPlayState = "running";
}

function pause() {
    document.getElementById("el" + cont).style.animationPlayState = "paused";
}

