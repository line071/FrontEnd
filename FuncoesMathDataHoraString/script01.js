//funções de data e hora
let agora =new Date(); //instaciando um obj da classe data
console.log(agora);
console.log(agora.toLocaleString());

//funções get(pegar informações)
console.log(agora.getFullYear());
//funções SET (alterar informações)
agora.setFullYear(2030);
//funções TO (imprimir) - formato de texto
console.log(agora.toLocaleDateString());
//manipulação de datass
let data1 = new Date();
let data2 = new Date("2025-12-31");

let diferenca = data2-data1; //milisecons

console.log(diferenca/(1000*60*60*24));