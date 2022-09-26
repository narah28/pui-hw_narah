const queryString = window.location.search;
    console.log(queryString);
const params = new URLSearchParams(queryString);
    console.log(params);
const rolltype = params.get('roll');
    console.log(rolltype);










// for storing glazing option names/values 
let allGlazing = [
]

// for storing pack size option names/values
let allPack = [
]

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
//console.log(allGlazing)

//pushing the addGlazingOptions array to the allGlazing array one by one
allPack.push(addPackOptions[0], addPackOptions[1], addPackOptions[2], addPackOptions[3]);
//console.log(allPack)


//adding the options with a for loop_glazing
for (let i = 0; i < allGlazing.length; i++) {
    let optionGlazing = document.createElement('option');
    optionGlazing.text = allGlazing[i].glazingOption;
    optionGlazing.value = allGlazing[i].price;
    console.log(optionGlazing)
    selectElementGlazing.add(optionGlazing);

}
//pack size
for (let i = 0; i < allPack.length; i++) {
    let optionPack = document.createElement('option');
    optionPack.text = allPack[i].packOptions;
    optionPack.value = allPack[i].price;

    selectElementSize.add(optionPack);
}

// calling the base price, getting rid of the dollar sign, and changing the type to number
let basePrice = document.querySelector('#cartTotalPrice').innerText
//console.log(basePrice)
basePrice = Number(basePrice.substring(1)) //just getting rid of the dollar sign and changing it to a number
//console.log(basePrice)
//console.log(typeof basePrice)

//for when the user clicks glazing option
function glazingChange(element) {
    const priceChange = Number(element.value);
    const packChange = Number(document.querySelector('#size').value);
    let updatedPrice = Number((priceChange + basePrice) * packChange).toFixed(2);
    //console.log(updatedPrice)
    //console.log(typeof updatedPrice)
    let totalPrice = document.querySelector('#cartTotalPrice')
    totalPrice.innerText = "$" + updatedPrice
}

//for when the user clicks pack size option
function sizeChange(element) {
    const packChange = Number(element.value);
    const priceChange = Number(document.querySelector('#glazing').value);
    let updatedPrice = Number((priceChange + basePrice) * packChange).toFixed(2);
    //console.log(updatedPrice)
    let totalPrice = document.querySelector('#cartTotalPrice')
    totalPrice.innerText = "$" + updatedPrice
}





