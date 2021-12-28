function city(city, population, treasury) {
    // this way we set properties of an object
    let myObj = {
        name: city,
        population: Number(population),
        treasury: Number(treasury),
    };

    return myObj; 

}
console.log(city('Tortuga',
7000,
15000));


