// array e Matrizes 

// array
let numeros = [1,2,3,4,5,6,7,8,9]; // lista com elementos numéricos
console.log(numeros[8]);
let texto = ["cachorro", "bola", "sapato", "prédio"]; //lista com elementos textuais
let mista = ["gato", 2, true ];
console.log(texto[1]);
console.log(mista[2]);

// tamanho do array (length)

console.log(texto.length); //4

// adicionar elementos ou alterar em um array 

//adicionar

//começo (unshift)
texto.unshift("pão");
console.log(texto); 
//fim (push)
texto.push("jogo");
console.log(texto);
//remover do começo (shift)
texto.shift();
console.log(texto)
//remover do finao (pop)
texto.pop();
console.log(texto);

//alteração de valor
texto[2] = "Tênis";
console.log(texto);

//percorrer um array (for // foreach)

for(let i = 0; i<numeros.length; i++){
    console.log("numeros ["+i+"]="+numeros[i]);
}

//foreach
texto.forEach(t => {
    console.log(t)
});

// atividade
let lista = [];

for (let i = 1; i <= 100; i++) {
    lista.push(i);
}

for (let i = 0; i < lista.length; i++) {
    console.log("numeros [" + i + "] = " + lista[i]);
}

//retorna o indice
texto.indexOf("Tênis");

//splice (remover elemento de posição específica)
texto.splice(2,1); //posição e quantidade
console.log(texto);

//Operações Avançadas de Arrays

let valores = [10, 20, 30, 40, 50];

//map
let valoresDobro = valores.map(x => x*2);
console.log(valoresDobro);

//filter 
let parteValores = valores.filter(x => x > 20)
console.log(parteValores)

//filtro e map x<35 x*2
let todosValores = [10, 25, 40, 5, 30, 50, 15];

let resultado = valores.filter(x => x < 35).map(x => x * 2);

console.log(resultado);

//reduce
// x acumulador, y = valor atual
let soma = valores.reduce((x,valorAtual)=>(x+valorAtual),0);

//sort

let z = [2,6,3,8,1,7,4,9,5];
z.sort();
console.log(z);