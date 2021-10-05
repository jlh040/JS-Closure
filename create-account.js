function createAccount(pin, amount=0) {
  let balance = amount;
  let correctPin = pin;

  return {
    checkBalance(enteredPin) {
      if (enteredPin !== correctPin) {
        return 'Invalid PIN.'
      }
      else {
        return `$${balance}`;
      }
    },
    deposit(enteredPin, depositAmount) {
      if (enteredPin !== correctPin) {
        return 'Invalid PIN.'
      }
      else {
        balance += depositAmount;
        return `Succesfully deposited $${depositAmount}. Current balance: $${balance}.`
      }
    },
    withdraw(enteredPin, withdrawAmount) {
      if (enteredPin !== correctPin) {
        return 'Invalid PIN.';
      }
      else if (withdrawAmount > balance) {
        return 'Withdrawal amount exceeds account balance. Transaction cancelled.'
      }
      else {
        balance = balance - withdrawAmount;
        return `Succesfully withdrew $${withdrawAmount}. Current balance: $${balance}.`
      }
    },
    changePin(oldPin, newPin) {
      if (oldPin !== correctPin) {
        return 'Invalid PIN.'
      }
      else {
        correctPin = newPin;
        return 'PIN successfully changed!';
      }
    }
  }
}

module.exports = { createAccount };
