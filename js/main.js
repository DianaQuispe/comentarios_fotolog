/*aquí va tu código*/
recoverData();
function save() {
    var name  = document.getElementById('name').value;
    var clave  = document.getElementById('clave').value;
    localStorage.setItem(name,clave);
    //    localStorage.name = document.getElementById('name').value;
    //    localStorage.clave = document.getElementById('clave').value;
    //    localStorage.data = document.getElementById('divs');
    //    //localStorage.nombrecito = document.getElementById('nombrecito').value;

}

function recoverData() {
    document.getElementById('data').innerHTML = "";
    for(var i =0; i<localStorage.length; i++) {

        var name = localStorage.key(i);
        var clave = localStorage.getItem(name);
        var divs = document.createElement('div');
        divs.setAttribute('id', 'divs');
        divs.className = 'color';

        var  nombre = document.createElement('h3');
        var texto1 = document.createTextNode(name);
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
        save();
        recoverData();
        document.getElementById("name").value = "";
        document.getElementById("clave").value = "";
        // Store
        // localStorage.setItem("lastname", "Smith");
        // Retrieve
    } else {
        document.getElementById("data").innerHTML = "Sorry, your browser does not support Web Storage...";
    }



}
function cleanData() {
    document.getElementById("data").innerHTML = "";

    localStorage.clear();
}
