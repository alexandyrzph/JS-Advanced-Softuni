function solve(input) {
    // declaring the map which will save the inputs in order that they appeared;
    let mapCars = new Map();
    // forof loop to iterate through all inputs and parse them as wanted;
    for (const line of input) {
        let [brand, model, produced] = line.split(' | ');
        // if the map doesnt have the brand we 'set' a brand and a new Map to it;
        if (!mapCars.has(brand)) {
            mapCars.set(brand, new Map());
        }
        // we use get to take the models name from the mapCars Map a.k.a Q7 Q6 X5 X6 and so on;
        let mapModels = mapCars.get(brand);
        // if there isn't such model we set it and add value 0;
        if (!mapModels.has(model)) {
            mapModels.set(model, 0);
        }
        // we set the production of every car for each model;
        mapModels.set(model, mapModels.get(model) + Number(produced));
    }
    // create a forof loop to iterate through the new Map and print the results as wanted on console; 
    for (const brand of mapCars.keys()) {
        console.log(brand);
        let mapModels = mapCars.get(brand);
        for (const model of mapModels.keys()) {
            console.log(`###${model} -> ${mapModels.get(model)}`);
        }
    }
}

solve(['Audi | Q7 | 1000',
    'Audi | Q6 | 100',
    'BMW | X5 | 1000',
    'BMW | X6 | 100',
    'Citroen | C4 | 123',
    'Volga | GAZ-24 | 1000000',
    'Lada | Niva | 1000000',
    'Lada | Jigula | 1000000',
    'Citroen | C4 | 22',
    'Citroen | C5 | 10'
]);