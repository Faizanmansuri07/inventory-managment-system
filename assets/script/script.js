// ===============
// selectors
// ===============

// const icons = document.querySelectorAll(".main-container .left-container .icons .icon");
// console.log(icons);






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



// ================
// event on edit tab
// ================
const toggleTab =  document.querySelector(".container");
document.querySelector("#op1").addEventListener("click" ,() => toggleTab.classList.toggle("show")
)

document.querySelector("#close").addEventListener("click", () => toggleTab.classList.remove("show"))



// ================
// event on the left container icons to toggle the Selection
// ==================================

const icons = document.querySelectorAll('.icon');

// Function to handle icon clicks
function handleIconClick(e) {
    // Remove 'left-tab-toggle' from all icons
    icons.forEach(icon => icon.classList.remove('left-tab-toggle'));

    // Add 'left-tab-toggle' to the clicked icon
    const clickedIcon = e.currentTarget; // Use e.currentTarget to get the clicked .icon
    clickedIcon.classList.add('left-tab-toggle');

    // Get the text content of the <p> element
    const text = clickedIcon.querySelector(".icon-name").innerText.trim();

    // Show/hide sections based on the clicked icon's text
    if (text.toLowerCase() === "inventory") {
        document.querySelector(".sub-right").style.display = "none";
        document.querySelector(".add-items-iv").style.display = "none"
        document.querySelector(".inventory").style.display = "block";
    } else if (text.toLowerCase() === "home") {
        document.querySelector(".sub-right").style.display = "block";
        document.querySelector(".inventory").style.display = "none";
        document.querySelector(".add-items-iv").style.display = "none"
    } else if (text.toLowerCase() === "add item") {
        document.querySelector(".sub-right").style.display = "none";
        document.querySelector(".inventory").style.display = "none";
        document.querySelector(".add-items-iv").style.display = "block"
    }
}

// Select the "Home" icon by default on window load
window.addEventListener("load", () => {
    const homeIcon = Array.from(icons).find(icon => {
        const text = icon.querySelector(".icon-name").innerText.trim();
        return text.toLowerCase() === "home";
    });

    if (homeIcon) {
        homeIcon.classList.add('left-tab-toggle');
        document.querySelector(".sub-right").style.display = "block";
        document.querySelector(".inventory").style.display = "none";
    }
});

// Attach event listeners to all icons
icons.forEach(icon => {
    icon.addEventListener("click", handleIconClick);
});


const imageInput = document.getElementById("imageUpload");
const imagePreview = document.getElementById("imagePreview");

imageInput.addEventListener("change", (event) => {
  const file = event.target.files[0]; // Get the selected file
  if (file) {
    // Create a temporary URL for the uploaded image
    const imageURL = URL.createObjectURL(file);
    imagePreview.src = imageURL; // Set the src of the image element
    imagePreview.style.display = "block"; // Make the image visible
  } else {
    imagePreview.style.display = "none"; // Hide the image if no file is selected
  }
});