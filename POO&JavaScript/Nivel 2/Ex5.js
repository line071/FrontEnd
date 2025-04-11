// Classe Produto (estoque)

class Produto {
  constructor(nome, preco, quantidade) {
    this.nome = nome;
    this.preco = preco;
    this.quantidade = quantidade;
  }

  vender(qtd) {
    if (qtd <= 0) {
      console.log("Quantidade inválida para venda.");
    } else if (qtd > this.quantidade) {
      console.log("Estoque insuficiente!");
    } else {
      this.quantidade -= qtd;
      console.log(`${qtd} unidade(s) de ${this.nome} vendida(s).`);
    }
  }

  repor(qtd) {
    if (qtd <= 0) {
      console.log("Quantidade inválida para reposição.");
    } else {
      this.quantidade += qtd;
      console.log(`${qtd} unidade(s) de ${this.nome} reposta(s) no estoque.`);
    }
  }

  exibirInfo() {
    console.log(`Produto: ${this.nome}`);
    console.log(`Preço: R$ ${this.preco.toFixed(2)}`);
    console.log(`Estoque: ${this.quantidade} unidade(s)`);
  }
}

let produto1 = new Produto("Caneta", 2.5, 100);

produto1.exibirInfo();
// Produto: Caneta
// Preço: R$ 2.50
// Estoque: 100 unidade(s)

produto1.vender(10);
// 10 unidade(s) de Caneta vendida(s).

produto1.repor(20);
// 20 unidade(s) de Caneta reposta(s) no estoque.

produto1.exibirInfo();
// Produto: Caneta
// Preço: R$ 2.50
// Estoque: 110 unidade(s)
