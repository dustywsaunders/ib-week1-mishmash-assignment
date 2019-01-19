
// Assignment 1: ShoppingCart

// 1. You must create a module named `ShoppingCart`. The module must export a `class`! In other words your `module.exports` is not an object, a string, or anything else, but only a class.
// 1. Given a brand new instance of the class in a variable `cart`, calling `cart.getItems()` should return an empty array.
// 1. The class should have a method `cart.addItem(itemName, quantity, price)`, which adds a new item to an internal array.
// 1. After adding items, a call to `cart.getItems()` should return an array that includes the added items.
// 1. Items in the array should be in this format:
//     ```js
//     {
//       name: "Name of the item",
//       quantity: 1,
//       pricePerUnit: 99.99
//     }
//     ```
// 1.  Calling `cart.clear()` should remove all items from the items array. Meaning, the next call to `getItems()` should return an empty array.
// 1.  Calling `cart.total()` should return the total value of the shopping cart. Meaning, the sum of the cost of each cart item. The cost of each item is its `pricePerUnit` multiplied by the `quantity`. **Use `reduce`!**

class ShoppingCart {
    constructor() {
        this.items = []
    }

    getItems() {
        return this.items
    }

    addItem(itemName, quantity, price) {
        return this.items.push({name: itemName, quantity: quantity, pricePerUnit: price})
    }

    clear() {
        // could use pop, but would need to loop
        // could set value to new array, but would create another array
        // this way, you just clear the existing array
        return this.items.length = 0
    }

    total() {
        const total = this.items.reduce((sum, value) => sum + value.quantity * value.pricePerUnit, 0)
        return total
    }
};

// const cart = new ShoppingCart();
// cart.addItem('shoes', 1, 100);
// cart.addItem('shirt', 2, 30);
// cart.addItem('socks', 3, 10)
// cart.clear()
// cart.getItems()
// cart.total()
// console.log(cart);
// console.log(cart.total());


module.exports = ShoppingCart;

