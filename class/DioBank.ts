export abstract class DioBank {
  private name: string;
  private accountBank: number;
  balance: number = 0;
  private readonly bonus: number = 10;
  private status: boolean = true;

  constructor(name: string, accountBank: number) {
    this.name = name;
    this.accountBank = accountBank;
  }

  deposit = (balance: number): void => {
    if (this.validationStatus()) {
      this.balance = balance + this.bonus;
      console.log(
        `Deposito de R$${balance} realizado com sucesso. Bonus de deposito acrescido de R$${this.bonus}. Saldo atual de R$${this.balance}`
      );
    }
  };

  withdraw = (withdrawValue: number): void => {
    if (this.validationStatus() && this.validationBalance(withdrawValue)) {
      this.balance -= withdrawValue;
      console.log(
        `Saque de ${withdrawValue} realizado com sucesso! Saldo atual ${this.balance}`
      );
    }
  };

  getLoan = (loanValue: number): void => {
    if (this.validationStatus()) {
      this.balance = loanValue;
      console.log(`Emprestimo de R$ ${loanValue} realizado com sucesso!`);
    }
  };

  private validationStatus = (): boolean => {
    if (this.status) {
      return this.status;
    }

    throw new Error(
      "Conta inexistente ou desativada. Verifique com seu gerente!"
    );
  };

  private validationBalance = (withdrawValue: number): boolean => {
    if (this.balance > 0 && withdrawValue <= this.balance) {
      return true;
    }

    throw new Error("Saldo insuficiente!");
  };
}
