var cont=0;

function agregarbtn() {
    cont=cont+1;
    document.getElementById("body").innerHTML += '<button id="el'+cont+'">Boton</button>';
    
}

function tamano(tamano) {
    if (tamano=='pequeno') {
        document.getElementById("el"+cont).style.fontSize= "xx-small";
    } else if (tamano=='mediano') {
        document.getElementById("el"+cont).style.fontSize= "medium";
    }else{
        document.getElementById("el"+cont).style.fontSize= "xx-large";
    }
}

function color() {
    var color= document.getElementById('color').value;
    document.getElementById("el"+cont).style.background= color;
}

function colorletra() {
    var colorletra= document.getElementById('colorletra').value;
    document.getElementById("el"+cont).style.color= colorletra;
}

function border() {
    var borde= document.getElementById('border').value;
    document.getElementById("el"+cont).style.border = borde;
}

function colorborde() {
    var colorborde= document.getElementById('colorborde').value;
    document.getElementById("el"+cont).style.borderColor= colorborde;
}
