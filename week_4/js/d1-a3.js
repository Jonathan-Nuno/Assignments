class BankAccount {
    constructor(balance, accountType) {
        this.balance = balance
        this.accountType = accountType
    }
    deposit(amount) {
        this.balance = this.balance + amount
        let type = this.accountType
        console.log(`$${amount} has been deposited into your ${type} account.`)
    }
    withdraw(amount) {
        this.balance = this.balance - amount
        let type = this.accountType
        console.log(`$${amount}has been withdrawn from your ${type} account.`)

    }

}

let checking = new BankAccount(100, "checking")
checking.deposit(100)
checking.withdraw(50)
console.log(checking.balance) // balance is $150.00
