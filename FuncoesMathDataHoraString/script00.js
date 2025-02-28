//Funções Matematicas (Math)

//Math.sqrt //Math.pow

//Raiz Quadrada de 25
console.log(Math.sqrt(25)); // 5
// o math.sqrt so faz raiz quadrada, não faz raiz cubica e etc..

//Potência de um numero
console.log(Math.pow(3,2)); 
console.log(Math.pow(4,3));
console.log(Math.pow(27,1/3));

//arredondamento usando Math(round, floor, ceil)
//round - numero mais proximo 
console.log(Math.round(4.3)); // 4
console.log(Math.round(4.7)); //5
//floor - sempre para baixo
console.log(Math.floor(4.9)); //4
//ceil- sempre para cima
console.log(Math.ceil(4.1)); //5

//math.random - numeros aleatorios
console.log(Math.random());//0 -> 1 
//0 -> 100
console.log(Math.round(Math.random()*100));
//0 -> 99
console.log(Math.floor(Math.random()*100));
//1 ->100
console.log(Math.ceil(Math.random()*100));
//30 -> 40
console.log(Math.round(Math.random()* 10+30));
//50 -> 100
console.log(Math.round(Math.random()* 50+50));

//math.abs (absolete)
console.log(Math.abs(-10)); //10
//math.min (2,3,4,5)
console.log(Math.min(1,2,3,4,5,6)); //1
//math.max