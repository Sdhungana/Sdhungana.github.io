"use strict";

class CheckingAccount extends Account {
    constructor(overdraftlimit, number) {
        super(number);
        this._overdraftlimit = overdraftlimit;
    }

    getOverDraftLimit() {
        return this._overdraftlimit;
    }

    setOverDraftLimit(overdraftlimit) {
        this._overdraftlimit = overdraftlimit;
    }
    withdraw(amount) {
        if (amount <= 0) {
            throw new RangeError("Withdraw amount has to be greater than zero");
        }
        if (amount > this._overdraftLimit + this._balance) {
            throw Error("Over the draft limit");
        }
        this._balance -= amount;
    }

    endOfMonth() {
        if (this.getBalance() < 0) {
            return `Warning, low balance CheckingAccount ${this.getNumber()}: balance: ${this.getBalance()} overdraft limit: ${this.getOverDraftLimit()}`;
        }
        return "";
    }

    toString() {
        return `Checking Account: ${this.getNumber()}: balance: ${this.getBalance()} overdraft limit: ${this.getOverDraftLimit()}}`
    }
}