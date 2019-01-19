
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
        return this.items.length = 0
    }

    total() {
        const total = this.items.reduce((sum, value) => sum + value.quantity * value.pricePerUnit, 0)
        return total
    }
};

module.exports = ShoppingCart;


// COMMENTS REGARDING clear()   
//           
//  I was not sure about correct method to clear the cart.
//
//  - could use pop, but would need to loop cart
//  - could set value to new empty array, but would create another array (duplication)     
//  - went with just setting the length to 0, although I am not sure if this solves it. Tests pass though.                                                       
             