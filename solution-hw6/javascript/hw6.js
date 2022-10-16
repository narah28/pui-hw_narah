let cart=[];

if (localStorage.getItem('storedCart') != null) {
    console.log("ITS NOT NULL")
    retrieveFromLocalStorage();
  }
else { 
    console.log("ITS NULL")
    let cart=[];
    console.log(cart)
};

/* getting the rolltype */
const queryString = window.location.search;
const params = new URLSearchParams(queryString);
const rolltype = params.get('roll');


/* heading of each detail page */
const headerElement = document.querySelector('#productPageTitle');
if (headerElement === null) {
} else {
headerElement.innerText = rolltype + " Cinnamon Roll"
};

/* prodcut image of each detail page */
const productImage = document.querySelector('.product_photo img');
if (productImage === null) {
} else {
productImage.src = './assets/' + rolls[rolltype].imageFile;
productImage.alt = rolltype + " cinnamon roll image"
};


/* product base price of each detail page */
const productPrice = document.querySelector('#cartTotalPrice');
if (productPrice === null) {
} else{
productPrice.innerText = "$" + rolls[rolltype].basePrice
};


/* ------------------- INSERTING THE OPTIONS FOR BOTH DROPDOWNS --------------------- */


// for storing glazing option names/values 
let allGlazing = [
];

// for storing pack size option names/values
let allPack = [
];

// finding the glazing select element in html
let selectElementGlazing = document.querySelector('#glazing')
let selectElementSize = document.querySelector('#size')

// adding the glazing options to the allGlazing array & allPack array
let addGlazingOptions = [
    {glazingOption: 'Keep original', 
     price: 0.00},

    {glazingOption: 'Sugar milk',
     price: 0.00},

    {glazingOption: 'Vanilla milk',
     price: 0.50},

    {glazingOption: 'Double chocolate',
     price: 1.50},
]

let addPackOptions = [
    {packOptions: '1',
     price: 1},

     {packOptions: '3',
      price: 3},

    {packOptions: '6',
     price: 5},

    {packOptions: '12',
     price: 10},
]

//pushing the addGlazingOptions array to the allGlazing array one by one
allGlazing.push(addGlazingOptions[0], addGlazingOptions[1], addGlazingOptions[2], addGlazingOptions[3]);

//pushing the addGlazingOptions array to the allGlazing array one by one
allPack.push(addPackOptions[0], addPackOptions[1], addPackOptions[2], addPackOptions[3]);

//adding the options with a for loop_glazing
if (selectElementGlazing === null) {
} else {
for (let i = 0; i < allGlazing.length; i++) {
    let optionGlazing = document.createElement('option');
    optionGlazing.text = allGlazing[i].glazingOption;
    optionGlazing.value = allGlazing[i].price;
    selectElementGlazing.add(optionGlazing);

}
//pack size
for (let i = 0; i < allPack.length; i++) {
    let optionPack = document.createElement('option');
    optionPack.text = allPack[i].packOptions;
    optionPack.value = allPack[i].price;

    selectElementSize.add(optionPack);
}
};

/* ------------------- CALCULATING THE TOTAL PRICE OF THE PRODUCT --------------------- */
/* HW4: fixed this part just to reflect the base price */

//for when the user clicks glazing option
function glazingChange(element) {
    const priceChange = Number(element.value);
    const packChange = Number(document.querySelector('#size').value);
    let updatedPrice = Number((priceChange + rolls[rolltype].basePrice) * packChange).toFixed(2);
    let totalPrice = document.querySelector('#cartTotalPrice');
    totalPrice.innerText = "$" + updatedPrice;
}


//for when the user clicks pack size option
function sizeChange(element) {
    const packChange = Number(element.value);
    const priceChange = Number(document.querySelector('#glazing').value);
    let updatedPrice = Number((priceChange + rolls[rolltype].basePrice) * packChange).toFixed(2);
    let totalPrice = document.querySelector('#cartTotalPrice');
    totalPrice.innerText = "$" + updatedPrice;
}

/* ------------------- ADD TO CART --------------------- */

/* adding items to the cart array : got the selectElement code from https://stackoverflow.com/questions/5913/getting-the-text-from-a-drop-down-box 
 */

function saveToLocalStorage() {
    const stringCart = JSON.stringify(cart);
    console.log(stringCart);
    localStorage.setItem('storedCart', stringCart); 
    console.log(localStorage);
}



function retrieveFromLocalStorage() {
    const stringCart  = localStorage.getItem('storedCart');
    console.log(stringCart);
    const savedCart= JSON.parse(stringCart);
    console.log(savedCart);
    cart = savedCart;
}

 

function addItemsToCart() {
    let currentGlazing = selectElementGlazing.options[selectElementGlazing.selectedIndex].text;
    let currentSize = selectElementSize.options[selectElementSize.selectedIndex].text;
    let addToCart = new Roll(rolltype, currentGlazing, currentSize, rolls[rolltype].basePrice);
 
    saveToLocalStorage();
    
    console.log(addToCart)
    retrieveFromLocalStorage();
    
    cart.push(addToCart);
    console.log(cart);

    saveToLocalStorage();
}
