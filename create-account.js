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
    }
  }
}

module.exports = { createAccount };
