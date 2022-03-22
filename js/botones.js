function mostrarImagen1(){
    try {
        var img = document.getElementById("B1");
        img.style.visibility = "visible";

    } catch (error) {
        alert(error);
    }
}

function mostrarImagen2(){
    try {
        var img = document.getElementById("B1");
        var img2 = document.getElementById("B2");
        img.style.visibility = "hidden";
        img2.style.visibility = "visible"

    } catch (error) {
        alert(error);
    }
}