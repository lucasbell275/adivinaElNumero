function textHTML(elemento, texto){
    let elementoHTML = document.getElementById(elemento);
    elementoHTML.innerHTML = texto;
    return;
}
let listaAmigos = []
function limpiarCaja(){
    document.getElementById('amigo').value = ''
}
function actualizarLista(){

}
function agregarAmigos(nombre){
    if(document.getElementById('amigo').value == ''){ 
        alert('Por favor, inserte un nombre.')
    } else{
            listaAmigos.push(nombre); 
            textHTML('listaAmigos', nombre);
            limpiarCaja()
    }
}
