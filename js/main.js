/*aquí va tu código*/
function save() {
    var name = document.getElementById('name').value;
    var clave = document.getElementById('clave').value;
    sessionStorage.setItem(name, clave);

}

function recoverData() {
    for (var I = 0; i < sessionStorage.length; i++) {
        var name = sessionStorage.key(i);
        var clave = sessionStorage.getItem(name);
        document.getElementById('data').innerHTML =
            var div = document.createElement('div');
        var text = '<h1><b>' + name + '</b><br><p>' + clave + '</p></h1>';
        div.appendChild(text);
        data.appendChild
    }
}
