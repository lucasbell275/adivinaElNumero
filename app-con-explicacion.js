//alert('Hola Mundo'); 

let numeroSecreto = Math.floor(Math.random()*10) + 1;
let numeroDelUsuario = 0;
let intentos = 1;
//let palabraVeces = 'vez'
let maximosIntentos = 3
while (numeroDelUsuario != numeroSecreto ) {
    numeroDelUsuario = parseInt(prompt('Dame un número por favor del 1 al 10'));

    console.log(typeof(numeroDelUsuario));
    console.log(numeroDelUsuario);
    /* Esta tambien
    es una manera
    de comparar   
    */

    if(numeroDelUsuario == numeroSecreto){ // En el if si usamos doble igual comparamos, si usamos uno solo definimos. Comparamos una variable con la otra, y usamos la llave para decir que es lo que va a suceder.
        //Se acierta
        alert(`Ese es el numero secreto: ${numeroDelUsuario} lo hiciste en: ${intentos} ${intentos == 1 ? 'vez' : 'veces'}.`); /*Aca en lo ultimo usamos el signo de pregunta para preguntarle a Java como un 
                                                                                                                                if. Si intentos es 1, pone vez, sino, con los dos puntos (que seria else) usaria la otra opcion que en este caso es veces*/ 
    } else if(numeroDelUsuario > numeroSecreto){
        alert('El numero secreto es menor'); 
    } else if (numeroDelUsuario < numeroSecreto){
        alert('El numero secreto es mayor');
    } 
    // El contador incrementa cuando no se acierta
    //intentos = intentos + 1;
    //intentos += 1;
    intentos++;
    //palabraVeces = 'veces';
    if (intentos > maximosIntentos) {
        alert(`Llegaste al numero ${maximosIntentos} de intentos`);
        break;
    }
}