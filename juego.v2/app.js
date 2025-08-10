
let numSecreto = 0;
let numIntentos = 1;
let numerosSorteados = [];
let numeroMaximo = 10;


function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
    let numeroUsuario = parseInt(document.getElementById('usernumber').value);
    if(numeroUsuario === numSecreto){
        asignarTextoElemento('p', `Acertaste el numero ${numSecreto} en ${numIntentos} ${(numIntentos === 1 ? 'vez' : 'veces')}`) ;
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else if(numSecreto > numeroUsuario){
        asignarTextoElemento('p', 'El numero es mayor');
    } else{
        asignarTextoElemento('p', 'El numero es menor');
        numIntentos++;
        limpiarCaja();
        }
    return;
}
function generarNumSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    console.log(numeroGenerado)
    console.log(numerosSorteados)
    if(numerosSorteados.length==numeroMaximo){
        asignarTextoElemento('p', 'Ya se sortearon todos los numeros posibles')
    } else{
        if(numerosSorteados.includes(numeroGenerado)){
            return generarNumSecreto();
        } else {
            numerosSorteados.push(numeroGenerado)
            return numeroGenerado;
        } 
    }
}

console.log(numSecreto);

function limpiarCaja(){
     document.querySelector('#usernumber').value = ''; 
}

function condicionesIniciales(){
asignarTextoElemento('h1', 'Juego del numero secreto!');
asignarTextoElemento('p', `Elegi un numero del 1 al ${numeroMaximo}`);
numSecreto = generarNumSecreto();
numIntentos = 1;
}

function reiniciarJuego(){
    limpiarCaja(); 
    condicionesIniciales()
    document.getElementById('reiniciar').setAttribute('disabled', 'true')
    
}

condicionesIniciales();
console.log(numSecreto);

