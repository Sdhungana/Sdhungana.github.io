describe('Test', () => {
    describe('Savings Account', () => {
        let s1 = new SavingsAccount(15,"10001")
        describe('getInterest', () => {
            it('should get savings account interest', () => {
                assert.equal( s1.getInterest(), 15);
            })
        });
        describe('setInterest', () => {
           it('should set savings account interest', () => {
               s1.setInterest(12);
               assert.equal(s1.getInterest(),12);
           })
       });
       describe('addInterest', () => {
           it('should add interest and return current balance', () => {
               s1.deposit(100);
                assert.equal(s1.addInterest(), 112);
           })
       });
       describe("endOfMonth", function () {
        it("Prints details of savings account", function () {
            assert.equal(
              s1.endOfMonth(),
              "Interest added SavingsAccount 10001: balance: 125.44 interest: 12"
            );
        });
    });

       describe('toString', () => {
           it('prints savings account details',() => {
               assert.equal(s1.toString(),`Savings Account ${s1.getNumber()} : balance: ${s1.getBalance()} interest: ${s1.getInterest()}`)
           })
       });
    });
    describe('Checking Account', () => {
        let c1 = new CheckingAccount(500,"1003");
        describe('getOverDraftLimit', () => {
            it('should get overdraft limit ',() => {
                assert.equal(c1.getOverDraftLimit(),500);
            })
        });
        describe('setOverDraftLimit', () => {
            it('should set overdraft limit ',() => {
                c1.setOverDraftLimit(600);
                assert.equal(c1.getOverDraftLimit(), 600);
            })
        });
        describe("withdraw", function () {
            describe("When the given amount is more than the balance", function () {
                it("Throws Error with Withdraw amount has to be greater than zero", function () {
                    assert.throws(() => { c1.withdraw(-1) }, Error, "Withdraw amount has to be greater than zero");
                });
            });

            describe("When the given amount is valid", function () {
                it("Decrease account balance by given amount", function () {
                    c1.deposit(50);
                    c1.withdraw(100);
                    assert.equal(c1.getBalance(), -50);
                });
            });
        });

        describe("endOfMonth", function () {
            describe("When the balance is less than 0", function () {
                it("Prints warning details of checking account", function () {
                    c1.deposit(120);
                    c1.withdraw(300);
                    assert.equal(c1.endOfMonth(), 'Warning, low balance CheckingAccount 1003: balance: -230 overdraft limit: 600');
                });
            });

            describe("When the balance is greater than 0", function () {
                it("Prints details of checking account", function () {
                    c1.deposit(500);
                    assert.equal(c1.endOfMonth(), '');
                });
            })


        });
        describe('toString', () => {
            it('prints checking account details',() => {
                assert.equal(c1.toString(),`Checking Account: ${c1.getNumber()}: balance: ${c1.getBalance()} overdraft limit: ${c1.getOverDraftLimit()}}`)
            })
        });

    });


    describe("Bank", function () {
        beforeEach(() => {
            bank = new Bank();
        });

        describe("addAccount", function () {
            it("adds an account, and returns number of accounts", function () {
                bank.addAccount(10);
                assert.equal(bank.addAccount(101), 2);
            });
        });

        describe("addCheckingAccount", function () {
            it("adds a checking account, and returns number of accounts", function () {
                assert.equal(bank.addCheckingAccount(1100, 123), 1);
            });
        });

        describe("addSavingsAccount", function () {
            it("adds a savings account, and returns number of accounts", function () {
                assert.equal(bank.addSavingsAccount(3, 3003), 1);
            });
        });

        describe("accountReport", function () {
            it("Prints details of each existing account", function () {
                bank.addCheckingAccount(1100, 123);
                bank.addAccount(101);
                bank.addSavingsAccount(3, 3003);
                assert.equal(bank.accountReport(), "Checking Account: 123: balance: 0 overdraft limit: 1100}\nAccount 101: balance 0\nSavings Account 3003 : balance: 0 interest: 3");
            });
        });
    });



});