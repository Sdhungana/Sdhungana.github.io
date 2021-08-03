"use strict";

class Bank {
    static nextNumber;

    constructor() {
        this._accounts = [];
    }

    addAccount(number) {
        this._accounts.push(new Account(number));
        return this._accounts.length;
    }

 
    addCheckingAccount(overdraftLimit, number) {
        this._accounts.push(new CheckingAccount(overdraftLimit, number));
        return this._accounts.length;
    }

  
    addSavingsAccount(interest, number) {
        this._accounts.push(new SavingsAccount(interest, number));
        return this._accounts.length;
    }

    closeAccount(number) {
        let accountIndex = this._accounts.findIndex((acc) => acc.getNumber() == number);
        if (accountIndex !== undefined) {
            this._accounts[accountIndex] = null;
        }
    }

    accountReport() {
        return this._accounts.filter(acc => acc instanceof Account).map(acc => acc.toString()).join("\n");
    }

    endOfMonth() {
        console.log(this._accounts.map(acc => acc.endOfMonth()));
    }
}