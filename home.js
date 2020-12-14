
function generate(){
    var child = document.createElement('img');
    child.src='http://thecatapi.com/api/images/get?format=src&type=gif&size=small';
    document.getElementById('container__img').appendChild(child);
}
function reset(){
    document.getElementById('container__img').innerHTML='';
    location.reload()
}