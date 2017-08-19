console.log("====================");
console.log("WELCOME TO MY SHOP!");
console.log("====================");

var faker = require("faker");

for(var i = 0; i < 10; i++){
        
    var randomItem = faker.commerce.productName();
    var randomPrice = faker.commerce.price();
    console.log(randomItem + " - $" + randomPrice);
}