function createAccount(pin, amount) {
  let balance = amount;
  let correctPin = pin;
  return {
    checkBalance(enteredPin) {
      if (enteredPin !== correctPin) {
        return 'Invalid PIN.'
      }
      else {
        return balance;
      }
    },
    deposit(enteredPin, depositAmount) {
      if (enteredPin !== correctPin) {
        return 'Invalid PIN.'
      }
      else {
        balance += depositAmount;
        return `Succesfully deposited ${depositAmount}. Current balance: ${balance}.`
      }
    },
    withdraw(enteredPin, withdrawAmount) {
      if (enteredPin !== correctPin) {
        return 'Invalid PIN.';
      }
    }
    
  }
}

module.exports = { createAccount };
