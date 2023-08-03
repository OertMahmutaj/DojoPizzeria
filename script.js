function pizzaOven(crustType, sauceType, cheeses, toppings) {
    var pizza = {};
    pizza.crustType = crustType;
    pizza.sauceType = sauceType;
    pizza.cheeses = cheeses;
    pizza.toppings = toppings;
    return pizza;
}

var pizza1 = pizzaOven("deep dish", "traditional", ["mozzarella"], ["pepperoni", "sausage"]);

var pizza2 = pizzaOven("hand tossed", "marinara", ["mozzarella", "feta"], ["mushrooms", "olives", "onions"]);

var pizza3 = pizzaOven("thin crust", "pesto", ["parmesan"], ["chicken", "pineapple"]);

var pizza4 = pizzaOven("stuffed crust", "alfredo", ["provolone"], ["ham", "bacon", "onion"]);

function randomPizza() {
    var crustTypes = ["deep dish", "hand tossed", "thin crust", "stuffed crust"];
    var sauceTypes = ["traditional", "marinara", "pesto", "alfredo"];
    var cheeses = ["mozzarella", "feta", "parmesan", "provolone"];
    var toppings = ["pepperoni", "sausage", "chicken", "pineapple", "mushrooms", "olives", "onions", "ham", "bacon"];

    var randomCrust = crustTypes[Math.floor(Math.random() * crustTypes.length)];
    var randomSauce = sauceTypes[Math.floor(Math.random() * sauceTypes.length)];
    var randomCheeses = [];
    var randomToppings = [];

    for (var i = 0; i < Math.floor(Math.random() * 3) + 1; i++) {
        randomCheeses.push(cheeses[Math.floor(Math.random() * cheeses.length)]);
        randomToppings.push(toppings[Math.floor(Math.random() * toppings.length)]);
    }

    return pizzaOven(randomCrust, randomSauce, randomCheeses, randomToppings);
}
console.log(pizzaOven(pizza1.crustType, pizza1.sauceType, pizza1.cheeses, pizza1.toppings))
console.log(randomPizza())
