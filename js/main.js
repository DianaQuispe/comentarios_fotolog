/*aquí va tu código*/

function save() {
    var nombre  = document.getElementById('name').value;
    var clave  = document.getElementById('coment').value;
    localStorage.setItem(nombre,clave);
    //    localStorage.name = document.getElementById('name').value;
    //    localStorage.clave = document.getElementById('clave').value;
    //    localStorage.data = document.getElementById('divs');
    //    //localStorage.nombrecito = document.getElementById('nombrecito').value;

}

function recoverData() {
    save() ;
    for(var i =0; i<sessionStorage.length; i++) {

        var nombre = sessionStorage.key(i);
        var clave = sessionStorage.getItem(name);
        var divs = document.createElement('div');
        divs.setAttribute('id', 'divs');
        divs.className = 'color';

        var  nombre = document.createElement('h3');
        var texto1 = document.createTextNode(nombre);
        nombre.appendChild(texto1);

        var comentario  = document.createElement('p');
        var texto2 = document.createTextNode(clave);
        comentario.appendChild(texto2);

        divs.appendChild(nombre);
        divs.appendChild(comentario);
        document.getElementById('data').appendChild(divs);
    }
    //    var nombrecito = localStorage.getItem('nombre');
    //    var clavecita = localStorage.getItem('clave');
    //
    //    if((nombrecito != undefined) &&(clavecita != undefined)) {
    //
    //    }

}
function coment()  {
    if (typeof(Storage) !== "undefined") {
        // Store
        localStorage.setItem(nombre, comentario);
        // Retrieve
        document.getElementById("result").innerHTML = localStorage.getItem("lastname");
    } else {
        document.getElementById("result").innerHTML = "Sorry, your browser does not support Web Storage...";
    }
}
function cleanData() {

}
