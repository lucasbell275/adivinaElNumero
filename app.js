let numeroSecreto = Math.floor(Math.random()*10) + 1;
let numeroDelUsuario = 0;
let intentos = 1;

let maximosIntentos = 3
while (numeroDelUsuario != numeroSecreto ) {
    numeroDelUsuario = parseInt(prompt('Dame un número por favor del 1 al 10'));

    console.log(typeof(numeroDelUsuario));
    console.log(numeroDelUsuario);

    if(numeroDelUsuario == numeroSecreto){ 

        alert(`Ese es el numero secreto: ${numeroDelUsuario} lo hiciste en: ${intentos} ${intentos == 1 ? 'vez' : 'veces'}.`); 
    } else if(numeroDelUsuario > numeroSecreto){
        alert('El numero secreto es menor'); 
    } else if (numeroDelUsuario < numeroSecreto){
        alert('El numero secreto es mayor');
    } 

    intentos++;
    if (intentos > maximosIntentos) {
        alert(`Llegaste al numero ${maximosIntentos} de intentos`);
        break;
    }
}