// Classe Conta Bancária

class ContaBancaria {
  constructor(titular, saldo = 0) {
    this.titular = titular;
    this.saldo = saldo;
  }

  depositar(valor) {
    if (valor > 0) {
      this.saldo += valor;
      console.log(`Depósito de R$ ${valor.toFixed(2)} realizado com sucesso.`);
    } else {
      console.log("Valor inválido para depósito.");
    }
  }

  sacar(valor) {
    if (valor <= 0) {
      console.log("Valor inválido para saque.");
    } else if (valor > this.saldo) {
      console.log("Saldo insuficiente para saque.");
    } else {
      this.saldo -= valor;
      console.log(`Saque de R$ ${valor.toFixed(2)} realizado com sucesso.`);
    }
  }

  consultarSaldo() {
    console.log(`Saldo atual de ${this.titular}: R$ ${this.saldo.toFixed(2)}`);
    return this.saldo;
  }
}

let conta1 = new ContaBancaria("João", 500);

conta1.consultarSaldo();         // Saldo atual de João: R$ 500.00

conta1.depositar(250);           // Depósito de R$ 250.00 realizado com sucesso.
conta1.sacar(100);               // Saque de R$ 100.00 realizado com sucesso.

conta1.sacar(1000);              // Saldo insuficiente para saque.

conta1.consultarSaldo();         // Saldo atual de João: R$ 650.00
