class SavingsAccount extends Account {
    constructor(interest, number) {
        super(number);
        this._interest = interest;
    }

     getInterest() {
         return this._interest;
     }   
     setInterest(interest) {
         this._interest = interest;
     }

     addInterest() {
         this.deposit(this.getBalance()*this.getInterest()/100);
         return this.getBalance();
     }

     endOfMonth() {
        this.addInterest();
        return `Interest added SavingsAccount ${this.getNumber()}: balance: ${this.getBalance()} interest: ${this.getInterest()}`;
    }

     toString() {
         return `Savings Account ${this.getNumber()} : balance: ${this.getBalance()} interest: ${this.getInterest()}`;
     }
}