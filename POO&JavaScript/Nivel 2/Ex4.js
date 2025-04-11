// Classe Aluno 

class Aluno {
  constructor(nome) {
    this.nome = nome;
    this.notas = [];
  }

  adicionarNota(nota) {
    if (typeof nota === "number" && nota >= 0 && nota <= 10) {
      this.notas.push(nota);
    } else {
      console.log("Nota inválida! Insira um número entre 0 e 10.");
    }
  }

  calcularMedia() {
    if (this.notas.length === 0) {
      return 0;
    }
    const soma = this.notas.reduce((total, nota) => total + nota, 0);
    return (soma / this.notas.length).toFixed(2);
  }

  situacao() {
    const media = this.calcularMedia();
    if (media >= 7) {
      return `${this.nome} foi Aprovado(a) com média ${media}`;
    } else {
      return `${this.nome} foi Reprovado(a) com média ${media}`;
    }
  }
}

let aluno1 = new Aluno("Ana");
aluno1.adicionarNota(8);
aluno1.adicionarNota(7);
aluno1.adicionarNota(6);

console.log("Média:", aluno1.calcularMedia());      // Média: 7.00
console.log(aluno1.situacao());                     // Ana foi Aprovado(a) com média 7.00
