const rolls = {
    "Original": {
        "basePrice": 2.49,
        "imageFile": "original-cinnamon-roll.jpg"
    },
    "Apple": {
        "basePrice": 3.49,
        "imageFile": "apple-cinnamon-roll.jpg"
    },
    "Raisin": {
        "basePrice": 2.99,
        "imageFile": "raisin-cinnamon-roll.jpg"
    },
    "Walnut": {
        "basePrice": 3.49,
        "imageFile": "walnut-cinnamon-roll.jpg"
    },
    "Double-Chocolate": {
        "basePrice": 3.99,
        "imageFile": "double-chocolate-cinnamon-roll.jpg"
    },
    "Strawberry": {
        "basePrice": 3.99,
        "imageFile": "strawberry-cinnamon-roll.jpg"
    }    
}

/* -------------------------------added for HW5--------------------------------------- */
const glazeOptions = {
    "Keep original": {
        "addedPrice": 0.00
    },

    "Sugar milk": {
        "addedPrice": 0.00
    },

    "Vanilla milk": {
        "addedPrice": 0.50
    },

    "Double chocolate": {
        "addedPrice": 1.50
    }
}

const packOptions = {
    "1": {
        "multiply": 1
    },

    "3": {
        "multiply": 3
    },

    "6": {
        "multiply": 5
    },

    "12": {
        "multiply": 10
    },
}