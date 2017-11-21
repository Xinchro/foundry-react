function subtract(bank, amount) {
  if(bank - amount >= 0) {
    bank = bank - amount
    return [true, bank]
  } else {
    return [false, bank]
  }
}

export { subtract }
