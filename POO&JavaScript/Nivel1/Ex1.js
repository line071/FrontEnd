//Crie uma classe pessoa

class Pessoa {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }

    apresentar() {
        console.log(`Olá, meu nome é ${this.nome} e tenho ${this.idade} anos.`);
    }
}

let pessoa1 = new Pessoa("João", 30);
pessoa1.apresentar(); 

let pessoa2 = new Pessoa("Lucia", 25);
pessoa2.apresentar(); 
