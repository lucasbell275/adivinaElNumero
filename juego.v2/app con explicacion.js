//let titulo = document.querySelector('h1');
//titulo.innerHTML = 'Juego del numero secreto';
/*Al seleccionar el elemento (por ejemplo h1) con el método querySelector y cambiar el texto con innerHTML,
estás utilizando correctamente los conceptos enseñados en el curso.*/
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
    if(numeroUsuario === numSecreto){ //Eltriple === sirve para hacer no solamente una comparacion al dato, si no al tipo del mismo.
        asignarTextoElemento('p', `Acertaste el numero ${numSecreto} en ${numIntentos} ${(numIntentos === 1 ? 'vez' : 'veces')}`) ;
        document.getElementById('reiniciar').removeAttribute('disabled');
        //El usuario no acerto
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
    //Si ya sorteamos todos los numeros
    if(numerosSorteados.length==numeroMaximo){
        asignarTextoElemento('p', 'Ya se sortearon todos los numeros posibles')
    } else{
        if(numerosSorteados.includes(numeroGenerado)){
            return generarNumSecreto();
        } else {
            numerosSorteados.push(numeroGenerado)
            return numeroGenerado;
        } //Si el numero generado esta en la lista, se elige otro numero.
    }
}

console.log(numSecreto);

function limpiarCaja(){
     document.querySelector('#usernumber').value = ''; //document.getElementById('#usernumber')
}

function condicionesIniciales(){
asignarTextoElemento('h1', 'Juego del numero secreto!');
asignarTextoElemento('p', `Elegi un numero del 1 al ${numeroMaximo}`);
numSecreto = generarNumSecreto();
numIntentos = 1;
}

function reiniciarJuego(){
    limpiarCaja(); //Primero vamos a limpiar la caja, vamos a reiniciar el numero secreto, se van a reiniciar los numeros de intentos, se van a indicar el numero de intentos y se va a deshabilitar el boton de nuevo juego
    condicionesIniciales()
    document.getElementById('reiniciar').setAttribute('disabled', 'true')
    
}
/*Asi se llama a una funcion, ejemplo: asignarTextoElemento();
asignarTextoElemento('h1', 'Juego del numero secreto!');
asignarTextoElemento('p', 'Elegi un numero del 1 al 10'); 
*/
condicionesIniciales();
console.log(numSecreto);
/*let numerosSorteados = []; //Todos los arreglos comienzan con posicion cero (en este caso, 5)
numerosSorteados.push(5);
numerosSorteados.push(9);
console.log(numerosSorteados);
console.log(numerosSorteados[0]); //Llama al numero de posicion 0, si ponemos un numero negativo no anda, siempre desde el 0
console.log(numerosSorteados.length); //La longitud de la tabla
numerosSorteados.push(4)
numerosSorteados.push(2)
console.log(numerosSorteados[numerosSorteados.length-1]); //Llama al anteultimo numero
frutas.pop();
console.log(frutas); // Salida: ["Manzana", "Uva", "Naranja"] (Esto eliminaria el ultimo elemento)*/
