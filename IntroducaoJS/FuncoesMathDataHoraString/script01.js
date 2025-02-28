// Funções de Data e Hora
let agora = new Date(); //instanciando um objeto da classe data
console.log(agora);
console.log(agora.toLocaleString())

// Funções GET (pego informações)

// Funções SET (Alterar Informações)

// Funções To (Imprimir) - Formato de Texto

//Manipulação de Datas
let data1 = new Date();
let data2 = new Date ("2025-12-31")

let diferenca = data2-data1; //miliseconds

console.log(diferenca/1000*60*60*24)