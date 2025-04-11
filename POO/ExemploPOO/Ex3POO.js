class ContaBancaria {
  constructor(titular, saldo = 0) {
    this.titular = titular;
    this.saldo = saldo;
  }

  depositar(valor) {
    if (valor > 0) {
      this.saldo += valor;
      console.log(`Depósito de R$ ${valor} realizado com sucesso.`);
    } else {
      console.log("Valor de depósito inválido.");
    }
  }

  sacar(valor) {
    if (valor > 0 && valor <= this.saldo) {
      this.saldo -= valor;
      console.log(`Saque de R$ ${valor} realizado com sucesso.`);
    } else {
      console.log("Saldo insuficiente ou valor inválido.");
    }
  }

  exibirSaldo() {
    console.log(`Saldo atual de ${this.titular}: R$ ${this.saldo.toFixed(2)}`);
  }
}

let conta1 = new ContaBancaria("Ana", 500);
conta1.exibirSaldo();
conta1.depositar(200);
conta1.sacar(100);
conta1.exibirSaldo();
