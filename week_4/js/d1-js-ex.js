

// Palindrome app
console.log("Palindrome detector")

function palin(sarah) {
    var sarahLen = sarah.length
    for (var index = 0; index < sarahLen / 2; index++) {
        if (sarah[index] != sarah[sarahLen - 1 - index]) {
            return console.log("Is not a palin")
        }
    }
    return console.log("is a Palin")

}

palin("abcbd")

// Duplicate finder & remover

names = ["John", "Mary", "Alex", "Steve", "Mary", "John"];
newNames = [...new Set(names)]; //convert array to set then back to array
console.log(newNames)

// Is the item in the array?

list = ["paper", "soap", "milk", "cereal"]

function inArray(input) {
    if (list.includes(input)) {
        console.log(input + " is in list")
    } else {
        console.log(input + " is not in list")
    }
}

inArray("paper")
inArray("candy")


// find lagest and smallet number & sort in ascending

numbers = [2, 45, 24, 12, 4, 57]

numbers.sort(function (a, b) { return b - a }) // sort in descending order
console.log(numbers[0])

numbers.sort(function (a, b) { return a - b }) // sort in ascending order
console.log(numbers[0])


// Fizz Buzz

function fizzBuzz(input) {
    if ((input % 5) === 0 && (input % 3) === 0) {
        console.log("Fizz Buzz")
    } else if ((input % 5) === 0 && (input % 3) !== 0) {
        console.log("Buzz")
    } else if ((input % 3) === 0 && (input % 5) !== 0) {
        console.log("Fizz")
    } else {
        console.log("Does not Fizz Buzz")
    }

}

fizzBuzz(15)
fizzBuzz(10)
fizzBuzz(9)
fizzBuzz(8)

// Is the number even or Odd?

function evenOdd(input) {
    if ((input % 2) === 0) {
        console.log(`${input} is an even number`)
    } else {
        console.log(`${input} is an odd number`)
    }
}

evenOdd(20)
evenOdd(33)


// Bank acount
console.log("Bank account app")

class BankAccount {
    constructor(firstName, lastName, middleName, accountStatus, balance, accountType) {
        this.balance = balance
        this.accountType = accountType
        this.firstName = firstName
        this.lastName = lastName
        this.middleName = middleName
        this.accountStatus = accountStatus
    }
    newAccount(firstName, lastName, middleName, amount, accountType) {
        if (amount < 100) {
            console.log("Depost must be $100 or greater.")
        } else {
            this.balance = amount
            this.firstName = firstName
            this.lastName = lastName
            this.middleName = middleName
            this.accountType = accountType
            this.accountStatus = "Opened"
        }
    }
    deposit(amount, accountType) {
        this.balance = this.balance + amount
        this.accountType = accountType
        let type = this.accountType
        console.log(`$${amount} has been deposited into your ${type} account.`)
    }
    withdraw(amount, accountType) {
        this.balance = this.balance - amount
        this.accountType = accountType
        let type = this.accountType
        if (this.balance < 0) {
            this.balance = this.balance - 35
            console.log("Your balance has fallen below $0 and you will be charged a $35 overdraft fee.")
        } else {
            console.log(`$${amount} has been withdrawn from your ${type} account.`)
        }

    }
    transfer(amount, destination) {
        this.balance = this.balance - amount
        if (destination === "savings") {
            savings.balance = savings.balance + amount
            console.log(`$${amount} has been transferred from your ${this.accountType} account to your ${destination} account`)
        } else {
            checking.balance = checking.balance + amount
            console.log(`$${amount} has been transferred from your ${this.accountType} account to your ${destination} account`)
        }
    }


}

let checking = new BankAccount("John", "Doe", "Mister", 150, "checking")
let savings = new BankAccount("John", "Doe", "Mister", 120, "savings")
checking.newAccount("John", "Doe", "Mister", 150, "checking")
savings.newAccount("John", "Doe", "Mister", 120, "savings")
checking.deposit(100, "checking")
checking.withdraw(50, "checking")
checking.transfer(50, "savings")
console.log(`Your ${checking.accountType} balance is $${checking.balance}`) // balance is $150.00
console.log(`Your ${savings.accountType} balance is $${savings.balance}`) // balance is $170.00