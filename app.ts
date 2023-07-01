class BankAccount {
    private balance: number;
  
    constructor(initialBalance: number) {
      this.balance = initialBalance;
    }
  
    getBalance(): number {
      return this.balance;
    }
  
    withdraw(amount: number): void {
      if (amount <= 0) {
        console.log("O valor do saque deve ser maior que zero.");
        return;
      }
  
      if (amount > this.balance) {
        console.log("Saldo insuficiente para efetuar o saque.");
        return;
      }
  
      this.balance -= amount;
      console.log(`Saque de R$ ${amount.toFixed(2)} realizado com sucesso.`);
    }
  
    deposit(amount: number): void {
      if (amount <= 0) {
        console.log("O valor do depósito deve ser maior que zero.");
        return;
      }
  
      this.balance += amount;
      console.log(`Depósito de R$ ${amount.toFixed(2)} realizado com sucesso.`);
    }
  }
  
  // Função para atualizar o saldo exibido na página
function updateBalance(): void {
    const balanceElement = document.querySelector<HTMLDivElement>('#balance');
    if (!balanceElement) {
      console.log("Elemento não encontrado: #balance");
      return;
    }
  
    balanceElement.textContent = `Saldo atual: R$ ${minhaConta.getBalance().toFixed(2)}`;
  }
  
  
  // Função para sacar dinheiro
  function withdraw(): void {
    const amountInput = document.querySelector<HTMLInputElement>('#txtnumero');
    if (!amountInput) {
      console.log("Elemento não encontrado: #txtnumero");
      return;
    }
  
    const amount = parseFloat(amountInput.value);
    minhaConta.withdraw(amount);
    updateBalance();
    amountInput.value = "";
  }
  
  // Função para depositar dinheiro
  function deposit(): void {
    const amountInput = document.querySelector<HTMLInputElement>('#depositar');
    if (!amountInput) {
      console.log("Elemento não encontrado: #depositar");
      return;
    }
  
    const amount = parseFloat(amountInput.value);
    minhaConta.deposit(amount);
    updateBalance();
    amountInput.value = "";
  }
  
  // Criação do objeto BankAccount
  const minhaConta = new BankAccount(1000);
  
  // Atualiza o saldo inicial exibido na página
  updateBalance();
  