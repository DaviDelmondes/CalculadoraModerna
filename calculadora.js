'use strict';
const display = document.getElementById('display');
const numeros = document.querySelectorAll('[id*=tecla]');
const operadores = document.querySelectorAll('[id*=operador]');

let novoNumero = true;
let operador;
let numeroAnterior;

const operacaoPedente = () => operador !== undefined;

const calcular = () => {
    if (operacaoPedente()){
        const numeroAtual =  parseFloat(display.textContent);
         novoNumero =true;
        const resultado = eval(`${numeroAnterior}${operador}${numeroAtual}`);
        atualizarDisplay(resultado);

       // if (operador == '+'){
       //     atualizarDisplay(numeroAnterior + numeroAtual);
       // }else if(operador == '-'){
       //     atualizarDisplay(numeroAnterior - numeroAtual)
       // }else if(operador == '*'){
       //     atualizarDisplay(numeroAnterior * numeroAtual)
       // }else if(operador == '/'){
       //     atualizarDisplay(numeroAnterior / numeroAtual)
       // }
    }
}

const atualizarDisplay = (texto) =>{
    if (novoNumero){
        display.textContent = texto;
        novoNumero = false;
    }else{
        display.textContent += texto;
    }
}

const inserirNumero = (evento) => atualizarDisplay(evento.target.textContent);

numeros.forEach(numero => numero.addEventListener('click' ,inserirNumero));

const selecionarOperador = (evento) => {
    if (!novoNumero){
        calcular();
        novoNumero = true;
        operador = evento.target.textContent;
        numeroAnterior = parseFloat(display.textContent);
        console.log (operador);
 }
}
operadores.forEach(operador => operador.addEventListener('click' ,selecionarOperador));

