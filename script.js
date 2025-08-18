// Step 1: Setting up Classes
class ProductProperties {
  constructor(name, price, quantity) {
    this.name = name;
    this.price = price;
    this.quantity = quantity;
  }

  // A method to calculate the total value price multiplied by quantity
  getTotalValue() {
    return this.price * this.quantity;
  }

  // A to string method to return a string representation
}
