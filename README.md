<h1>FinPOO - Sistema Bancário</h1>
Este projeto representa uma implementação simples de um sistema bancário usando programação orientada a objetos em JavaScript. Ele inclui conceitos como encapsulamento, herança e polimorfismo para criar classes de conta corrente, conta poupança e operações financeiras.

Estrutura do Projeto
1. Conta (Conta.js)
Classe base que representa uma conta bancária.
Métodos para depositar, sacar e adicionar transações.
Propriedades encapsuladas como cliente, saldo e histórico de transações.
2. ContaCorrente (ContaCorrente.js)
Herda da classe Conta, adicionando características específicas de conta corrente.
Implementa um método para realizar transferências.
3. ContaPoupanca (ContaPoupanca.js)
Herda da classe Conta, adicionando características específicas de conta poupança.
Implementa um método para calcular rendimento.
4. OperacaoFinanceira (OperacaoFinanceira.js)
Classe base para operações financeiras, utilizando polimorfismo.
5. OperacaoDeposito (OperacaoDeposito.js)
Herda de OperacaoFinanceira, representando a operação de depósito.
6. OperacaoSaque (OperacaoSaque.js)
Herda de OperacaoFinanceira, representando a operação de saque.
7. Index.html
Página HTML para exibir informações das contas e interagir com elas.
8. FinPOO.js
Script principal que cria instâncias das classes e interage com o HTML.

<h2>Como Usar</h2>
Clone o Repositório:

git clone https://github.com/seu-usuario/finpoo-sistema-bancario.git

cd finpoo-sistema-bancario

<h2>Abra o Projeto:</h2>

Abra o arquivo index.html em um navegador web.
Interaja com as Contas:

Utilize os botões na página para realizar depósitos, saques e transferências.
Console (Opcional):

Informações adicionais e históricos de transações podem ser visualizados pelo console do navegador.

<h2>Notas Adicionais</h2>
As classes Conta, ContaCorrente e ContaPoupanca implementam encapsulamento para proteger propriedades sensíveis.
Herança é utilizada para estender funcionalidades específicas de contas correntes e poupanças.
Polimorfismo é aplicado nas operações financeiras, permitindo tratamento genérico em alguns casos.

Sinta-se à vontade para explorar, modificar e expandir este projeto!
