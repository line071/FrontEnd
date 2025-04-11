class Calculadora {
  static somar(a, b) {
    return a + b;
  }

  static subtrair(a, b) {
    return a - b;
  }

  static multiplicar(a, b) {
    return a * b;
  }

  static dividir(a, b) {
    if (b === 0) {
      return "Erro: divisão por zero!";
    }
    return a / b;
  }
}

console.log("Soma:", Calculadora.somar(20, 45)); //65
console.log("Subtração:", Calculadora.subtrair(10, 5)); //5
console.log("Multiplicação:", Calculadora.multiplicar(7, 3)); //21
console.log("Divisão:", Calculadora.dividir(50, 5)); //10
console.log("Divisão por zero:", Calculadora.dividir(35, 0)); //Erro: divisão por zero!
