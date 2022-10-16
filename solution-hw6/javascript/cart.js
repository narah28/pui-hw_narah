let cart = [];

function retrieveFromLocalStorage() {
    const stringCart  = localStorage.getItem('storedCart');
    const savedCart= JSON.parse(stringCart);
    console.log(savedCart);
    cart = savedCart;

}

if (localStorage.getItem('storedCart') != null) {
    retrieveFromLocalStorage();
  }
else {
    let cart = [
    ]
}

/* declaring necessary global variables */
let cartProducts = new Set ();
let rollPriceList = [];
let totalSum = 0;

/* setting up Roll class */
class Roll {
    constructor(rollType, rollGlazing, packSize, basePrice) {
        this.type = rollType;
        this.glazing =  rollGlazing;
        this.size = packSize;
        this.basePrice = basePrice;

        this.element = null;
    }
}
/* so that the below part only runs when on the shopping-cart page */

const checkTitle = document.querySelector('title');
console.log(checkTitle)
if (checkTitle.innerText=='Shopping Cart') {

/* adding new objects to the class Roll */
function addNewRoll (rollType, rollGlazing, packSize, basePrice) {
    const newRoll = new Roll(rollType, rollGlazing, packSize, basePrice);
    cartProducts.add(newRoll);
    return newRoll;
}
/* if (allGlazing == undefined) {
} else { */
/* putting in the values for each roll & adding the createElement function */

for (let i=0; i < cart.length; i++) {
    addNewRoll(cart[i].type, cart[i].glazing, cart[i].size, cart[i].basePrice);
}
/* } */


for (const newRoll of cartProducts) {
/*     console.log(newRoll);
 */    createElement(newRoll);
}

/* cloning the template and putting the rolls on the page */
function createElement(newRoll) {
    const template = document.querySelector('#cartItem-template');
    const clone = template.content.cloneNode(true);
    newRoll.element = clone.querySelector('.cartItemList');

/*     console.log(newRoll.element);
 */
    const btnRemove = newRoll.element.querySelector('.remove-button');
    btnRemove.addEventListener('click', () => {
        removeFn(newRoll);
    });

    const cartItemListElement = document.querySelector('#newRollList');
/*     console.log(newRoll.element);
 */    cartItemListElement.prepend(newRoll.element);

    updateElement(newRoll);
}

/* updating the information for each of the rolls */
function updateElement(newRoll) {
    const rollImageElement = newRoll.element.querySelector('.rollPhoto');
    const rollNameElement = newRoll.element.querySelector('#roll-name');
    const rollGlazingElement = newRoll.element.querySelector('#roll-glazing');
    const rollSizeElement = newRoll.element.querySelector('#roll-packing');
    const rollPriceElement = newRoll.element.querySelector('.cart-price');
    const rollRemoveElement = newRoll.element.querySelector('.removeText');

/*  console.log("HERE", rollImageElement);
 */ rollImageElement.src = './assets/' + rolls[newRoll.type].imageFile;
    rollImageElement.alt = newRoll.type + ' Cinnamon Roll';
/*  console.log(rollImageElement.src);
 */    
    rollNameElement.innerText = newRoll.type + ' Cinnamon Roll';
/*  console.log(rollNameElement.innerText);
 */   
    rollGlazingElement.innerText = "Glazing: " + newRoll.glazing;
/*  console.log(rollGlazingElement.innerText);
 */    
    rollSizeElement.innerText = "Pack Size: " + newRoll.size;
/*  console.log(rollSizeElement.innerText);
 */    
    rollPriceElement.innerText = "$" + Number((newRoll.basePrice + glazeOptions[newRoll.glazing].addedPrice) * packOptions[newRoll.size].multiply).toFixed(2); /* got the glazing and size value from the dictionary I made (in the rollsData.js file) */
/*  console.log(rollPriceElement.innerText);
 */
    rollPriceList.push(rollPriceElement.innerText);
/*  console.log(rollPriceList);
 */
}

/* removing the item! */
 function removeFn(newRoll) {
    newRoll.element.remove();
    cartProducts.delete(newRoll);

    cart = Array.from(cartProducts);
    saveToLocalStorage();
    retrieveFromLocalStorage();

    totalSum = totalSum - Number((newRoll.basePrice + glazeOptions[newRoll.glazing].addedPrice) * packOptions[newRoll.size].multiply).toFixed(2);     
        
    getTotalSum.innerText = "$" + (totalSum).toFixed(2);

 }

/* calculating the total cart price */
for (const element of rollPriceList) {
    let price = Number(element.slice(1));
    totalSum += price;
}

/* displaying the total cart price */
let getTotalSum = document.querySelector('#totalPrice');
getTotalSum.innerText = "$" + (totalSum).toFixed(2);
};
