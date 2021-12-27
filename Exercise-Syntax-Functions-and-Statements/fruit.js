function fruits (type, weight, pricePerKilo) {

    let money = (pricePerKilo*weight)/1000;
    console.log(`I need $${money.toFixed(2)} to buy ${(weight/1000).toFixed(2)} kilograms ${type}.`);

}
fruits('orange', 2500, 1.80);
fruits('apple', 1563, 2.35);