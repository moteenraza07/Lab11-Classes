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

  // Step 3 adding static method to apply a discount
  static applyDiscount(products, discount) {
    products.forEach((product) => {
      let newPrice = product.price - product.price * discount;
      product.price = parseFloat(newPrice.toFixed(2));
    });
  }
}

const orange = new ProductProperties("Orange", 4, 3);
// example
console.log(orange.toString());
console.log("The total value is: $", orange.getTotalValue());

// Step 2 Adding inheretince

// subclass

class PerishableProductProperties extends ProductProperties {
  constructor(name, price, quantity, expirationDate) {
    super(name, price, quantity);
    this.expirationDate = expirationDate;
  }
  //Override toString method
  toString() {
    return `Product: ${this.name}, Price: $${this.price}, Quantity: ${this.quantity}, Expiration Date: ${this.expirationDate}`;
  }
}

//example for milk and yogurt
const milk = new PerishableProductProperties("milk", 1.5, 10, "2025-08-22");
const yogurt = new PerishableProductProperties("Yogurt", 4.5, 2, "2025-08-30");

//console log milk output
console.log(milk.toString());
console.log("The total value is: $" + milk.getTotalValue());

console.log(yogurt.toString());
console.log("The total value is: $" + yogurt.getTotalValue());

// create an array of products

const products = [milk, yogurt, orange];

// applying a %30 discount
ProductProperties.applyDiscount(products, 0.3);

console.log("Price after the 30% discount: ");
products.forEach((price) => console.log(price.toString()));

// Step 4: Store class

class store {
  constructor() {
    this.inventory = [];
  }
}
