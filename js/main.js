/*aquí va tu código*/
function save() {
    var name = document.getElementById('name').value;
    var coment = document.getElementById('coment').value;
    sessionStorage.setItem(name, coment);

}
