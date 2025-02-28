// Situação de Aprendizagem 01 - Array
const prompt = require("prompt-sync")();//entrada de dados

// Array notas
let notas = [];//array de notas

function inserirNotas(){
    let nota = prompt("Digite a nota: ");
    notas.push(nota);
}

function calcularMedia(){
    let media = notas.reduce((soma,nota)=>soma=nota, 0)/notas.length
}

function menu(){
    
}