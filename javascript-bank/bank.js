/* exported Bank */

function Bank() {
  this.nextAccountNumber = 1;
  this.accounts = [];
}

Bank.prototype.openAccount = function (holder, balance) {
  if (balance > 0 && (balance - Math.floor(balance) === 0)) {
    var newAcct = new Account(this.nextAccountNumber, holder);
    if (balance >= 0) {
      newAcct.deposit(balance);
    } else {
      newAcct.withdraw(balance);
    }
    this.accounts.push(newAcct);
    this.nextAccountNumber++;
    return newAcct.number;
  } else { return null; }
};

Bank.prototype.getAccount = function (acctNumber) {
  for (var i = 0; i < this.accounts.length; i++) {
    if (this.accounts[i].number === acctNumber) {
      return this.accounts[i];
    }
  }
  return null;
};

Bank.prototype.getTotalAssets = function () {
  if (this.accounts.length === 0) { return 0; }
  var grandTotal = 0;
  for (var i = 0; i < this.accounts.length; i++) {
    grandTotal += this.accounts[i].balance;
  }
  return grandTotal;
};
