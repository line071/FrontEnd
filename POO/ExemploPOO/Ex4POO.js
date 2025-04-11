class Funcionario {
  constructor(nome, salario, cargo) {
    this.nome = nome;
    this.salario = salario;
    this.cargo = cargo;
  }

  aumentarSalario(percentual) {
    if (percentual > 0) {
      let aumento = this.salario * (percentual / 100);
      this.salario += aumento;
      console.log(`${this.nome} recebeu um aumento de ${percentual}%.`);
    } else {
      console.log("Percentual inválido.");
    }
  }

  exibirInfo() {
    console.log(`Funcionário: ${this.nome}`);
    console.log(`Cargo: ${this.cargo}`);
    console.log(`Salário: R$ ${this.salario.toFixed(2)}`);
  }
}

// Exemplo de uso:
let funcionario1 = new Funcionario("Carlos", 3000, "Analista");
funcionario1.exibirInfo();
funcionario1.aumentarSalario(10);
funcionario1.exibirInfo();
