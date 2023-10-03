function trocaTema() {
    const classe = document.body.className;

    if(classe == "light") {
        document.body.className = "dark";
        document.getElementById("button").innerHTML = "Dark Theme"

    } else {
        document.body.className = "light";
        document.getElementById("button").innerHTML = "Light Theme"
    }

}

function trocaTexto() {
    const classe = document.body.className;

    if(classe == "light") {
        document.getElementById("button").innerHTML = "Activate Dark";

    } else {
        document.getElementById("button").innerHTML = "Activate Light";
    }
}

function voltaTexto() {
    const classe = document.body.className;

    if(classe == "light") {
        document.getElementById("button").innerHTML = "Light Theme";

    } else {
        document.getElementById("button").innerHTML = "Dark Theme";
    }
}