let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;
let totalDeJugadasMaximas = 5;

function verificarIntento() {
  let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
  if(numeroDeUsuario === numeroSecreto){
    asignarTextoElemento("p", `Acertaste el número en ${intentos} ${(intentos === 1)? 'intento' : 'intentos'}`);
    document.getElementById('reiniciar').removeAttribute('disabled');
  } else if(numeroSecreto > numeroDeUsuario) { 
    asignarTextoElemento('p', 'El número es mayor');
    intentos++;
  } else {
    asignarTextoElemento('p', 'El número secreto es menor');
    intentos++;
  }
  limpiarCaja();
  return ;
};
function limpiarCaja(){
    //Toma el nombre del id(#valor) del input y deja en blanco el espacio.
    document.querySelector('#valorUsuario').value = '';
};

function asignarTextoElemento(elemento, texto) {
  let elementoHTML = document.querySelector(elemento);
  elementoHTML.innerHTML = texto;
  return;
};
function condicionesIniciales(){
    asignarTextoElemento('h1', 'Juego del número secreto');
    asignarTextoElemento('p', `Indica un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    console.log(numeroSecreto);
    intentos = 1;
}

function reiniciarJuego() {
    //Limpiar input
    limpiarCaja();
    //Indicar mensaje de intervalos de números
    //Generar el número aleatorio
    //Inicializar el número de intentos
    condicionesIniciales();
    //Deshabilitar el boton de juego nuevo
    document.querySelector('#reiniciar').setAttribute('disabled', 'true');
}
condicionesIniciales();

function generarNumeroSecreto(){
    let numeroGenerado = Math.floor(Math.random() * numeroMaximo) + 1;
    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    if(numeroMaximo == listaNumerosSorteados.length || totalDeJugadasMaximas == listaNumerosSorteados.length) {
        asignarTextoElemento("p", "Ya se sortearon todos los números posibles");
    } else {
        //Si el número generado está incluído en la lista
        if(listaNumerosSorteados.includes(numeroGenerado)) {
            return generarNumeroSecreto();
        } else {
            listaNumerosSorteados.push(numeroGenerado);
        return numeroGenerado; 
        };
    };
};
