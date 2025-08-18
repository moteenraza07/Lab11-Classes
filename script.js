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
  toString() {
    return `Product: ${this.name}, Price: $${this.price}, Quantity: ${this.quantity}`;
  }
}

const orange = new ProductProperties("Orange", 4, 3);

console.log(orange.toString());
console.log("The total value is: $", orange.getTotalValue());
