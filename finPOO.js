// Encapsulamento
class Conta {
  constructor(cliente, saldo) {
    this._cliente = cliente;
    this._saldo = saldo || 0;
    this._historicoTransacoes = [];
  }

  get cliente() {
    return this._cliente;
  }

  get saldo() {
    return this._saldo;
  }

  get historicoTransacoes() {
    return this._historicoTransacoes;
  }

  depositar(valor) {
    if (valor > 0) {
      this._saldo += valor;
      this._adicionarTransacao("Depósito", valor);
      console.log(`Depósito de ${valor} realizado. Novo saldo: ${this._saldo}`);
    } else {
      console.log("Valor inválido para depósito.");
    }
  }

  sacar(valor) {
    if (valor > 0 && valor <= this._saldo) {
      this._saldo -= valor;
      this._adicionarTransacao("Saque", valor);
      console.log(`Saque de ${valor} realizado. Novo saldo: ${this._saldo}`);
    } else {
      console.log("Saldo insuficiente ou valor inválido para saque.");
    }
  }

  _adicionarTransacao(tipo, valor) {
    const transacao = {
      tipo: tipo,
      valor: valor,
      data: new Date(),
    };
    this._historicoTransacoes.push(transacao);
  }
}

// Herança
class ContaCorrente extends Conta {
  constructor(cliente, saldo, limite) {
    super(cliente, saldo);
    this._limite = limite || 500;
  }

  // Métodos específicos da ContaCorrente
  realizarTransferencia(destino, valor) {
    if (valor > 0 && valor <= this._saldo + this._limite) {
      this.sacar(valor);
      destino.depositar(valor);
      console.log(
        `Transferência de ${valor} realizada para ${destino.cliente}.`
      );
    } else {
      console.log("Limite insuficiente para a transferência.");
    }
  }
}

class ContaPoupanca extends Conta {
  constructor(cliente, saldo, rendimento) {
    super(cliente, saldo);
    this._rendimento = rendimento || 0.03;
  }

  // Métodos específicos da ContaPoupanca
  calcularRendimento() {
    const rendimento = this._saldo * this._rendimento;
    this.depositar(rendimento);
    console.log(
      `Rendimento de ${rendimento} aplicado à conta de ${this.cliente}.`
    );
  }
}

// Polimorfismo
class OperacaoFinanceira {
  realizarOperacao(conta, valor) {
    // Implementação genérica
  }
}

class OperacaoDeposito extends OperacaoFinanceira {
  realizarOperacao(conta, valor) {
    conta.depositar(valor);
    console.log(`Operação de depósito realizada para ${conta.cliente}.`);
  }
}

class OperacaoSaque extends OperacaoFinanceira {
  realizarOperacao(conta, valor) {
    conta.sacar(valor);
    console.log(`Operação de saque realizada para ${conta.cliente}.`);
  }
}

const cliente1 = "Alice";
const cliente2 = "Jao";

const contaCorrenteAlice = new ContaCorrente(cliente1, 1000, 500);
const contaPoupancaAlice = new ContaPoupanca(cliente1, 5000, 0.05);

const contaCorrenteJao = new ContaCorrente(cliente2, 2000, 1000);
const contaPoupancaJao = new ContaPoupanca(cliente2, 3000, 0.03);

const operacaoDeposito = new OperacaoDeposito();
const operacaoSaque = new OperacaoSaque();

function atualizarInformacoes() {
  document.getElementById(
    "info-conta-corrente-Alice"
  ).innerText = `Conta Corrente (${cliente1}): Saldo: $${contaCorrenteAlice.saldo}, Limite: R$${contaCorrenteAlice._limite}`;
  document.getElementById(
    "info-conta-poupanca-Alice"
  ).innerText = `Conta Poupança (${cliente1}): Saldo: $${
    contaPoupancaAlice.saldo
  }, Rendimento: ${contaPoupancaAlice._rendimento * 100}%`;

  document.getElementById(
    "info-conta-corrente-Jao"
  ).innerText = `Conta Corrente (${cliente2}): Saldo: $${contaCorrenteJao.saldo}, Limite: R$${contaCorrenteJao._limite}`;
  document.getElementById(
    "info-conta-poupanca-Jao"
  ).innerText = `Conta Poupança (${cliente2}): Saldo: R$${
    contaPoupancaJao.saldo
  }, Rendimento: ${contaPoupancaJao._rendimento * 100}%`;
}

function realizarDeposito(contaOrigem) {
  const valor = parseFloat(document.getElementById("valor-ope").value);
  const mensagemErroElement = document.getElementById("mensagem-erro");
  operacaoDeposito.realizarOperacao(contaOrigem, valor);
  atualizarInformacoes();
  mensagemErroElement.innerText = "";
}
function realizarSaque(contaOrigem) {
  const valor = parseFloat(document.getElementById("valor-ope").value);
  const mensagemErroElement = document.getElementById("mensagem-erro");

  if (valor > 0 && valor <= contaOrigem.saldo) {
    operacaoSaque.realizarOperacao(contaOrigem, valor);
    atualizarInformacoes();
    mensagemErroElement.innerText = "";
  } else {
    mensagemErroElement.innerText =
      "Saldo insuficiente ou valor inválido para saque.";
  }
}
function realizarTransferencia(contaOrigem, contaDestino) {
  const valorElement = document.getElementById("valor-ope");
  const valor = parseFloat(valorElement.value);
  const mensagemErroElement = document.getElementById("mensagem-erro");

  if (valor > 0 && valor <= contaOrigem.saldo) {
    contaOrigem.realizarTransferencia(contaDestino, valor);
    atualizarInformacoes();
    mensagemErroElement.innerText = "";
  } else {
    mensagemErroElement.innerText =
      "Saldo insuficiente ou valor inválido para transferência.";
  }
}

console.log(
  "Histórico de Transações de Alice:",
  contaCorrenteAlice.historicoTransacoes
);
console.log(
  "Histórico de Transações de Jão:",
  contaPoupancaJao.historicoTransacoes
);
