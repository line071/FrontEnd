// Classe Livro

class Livro {
    constructor(titulo, autor, paginas) {
        this.titulo = titulo;
        this.autor = autor;
        this.paginas = paginas;
    }

    exibirInfo() {
        console.log(`Livro: "${this.titulo}", Autor: ${this.autor}, Páginas: ${this.paginas}`);
    }
}

let livro1 = new Livro("O corpo fala: A linguagem silenciosa da comunicação não verbal", "Pierre Weil", 288);
livro1.exibirInfo(); 

let livro2 = new Livro("A Menina que Roubava Livros", "Markus Zusak", 480);
livro2.exibirInfo(); 
