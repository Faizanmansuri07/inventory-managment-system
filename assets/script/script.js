class product {
    constructor(name, price, quantity) {
        this.name = name;
        this.price = price;
        this.quantity = quantity;
    }
}

class Inventory {
    constructor() {
        this.products = [];
    }
    addProduct(product) {
        this.products.push(product)
        console.log(this.products);
    }
    updateQuantity(name, updatedQuantity) {
        if(name && updatedQuantity) {
            const product = this.products.find((product) => product.name === name);
            product.quantity = updatedQuantity;            
            // this.totalValues()

        }   else {
            return
        }
    }

    totalValues() {
        let totalInventory = 0;
        this.products.forEach((product)  => {
            totalInventory += product.price * product.quantity
        })
        console.log(totalInventory);
    }

    highestValue() {
        if (this.products.length === 0) {
            console.log("No products in inventory.");
            return;
        }

        let highestValueProduct = this.products[0]; // Assume the first product has the highest value
        this.products.forEach((product) => {
            if (product.price * product.quantity > highestValueProduct.price * highestValueProduct.quantity) {
                highestValueProduct = product;
            }
        });

        console.log(
            `${highestValueProduct.name} has the highest value: ${highestValueProduct.price * highestValueProduct.quantity}`
        );
    }
}



const inventory = new Inventory();

const pr1 = new product("shampoo", 120, 2);
const pr2 = new product("shoap", 300, 3);
inventory.addProduct(pr1)
inventory.addProduct(pr2)
inventory.updateQuantity("shoap", 5)
inventory.totalValues()
inventory.highestValue()



