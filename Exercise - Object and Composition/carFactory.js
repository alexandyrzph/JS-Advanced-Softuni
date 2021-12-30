function solve(car) {
    let newCar = {};
    if (car.wheelsize % 2 === 0) {
        car.wheelsize-=1;
    }
    let arrWheel = [1, 2, 3, 4]
        .fill(car['wheelsize'], 0, 4);
    newCar.model = car.model;
    // modifying car engine
    if (Math.abs(car.power - 90) < Math.abs(car.power - 120)) {
        newCar.engine = {power: 90, volume: 1800};
    } else if (Math.abs(car.power - 90) < Math.abs(car.power - 120)) {
        newCar.engine = {power: 120, volume: 2400};
    } else if (Math.abs(car.power - 120) <= Math.abs(car.power - 200)) {
        newCar.engine = {power: 120, volume: 2400}
    } else if (Math.abs(car.power - 120) >= Math.abs(car.power - 200)) {
        newCar.engine = {power: 200, volume: 3500};
    }


    newCar.carriage = {type: car.carriage, color: car.color};

    newCar.wheels = arrWheel;
    return newCar;
}

console.log(solve({
        model: 'VW Golf II',
        power: 90,
        color: 'blue',
        carriage: 'hatchback',
        wheelsize: 14
    }
));

console.log(solve({
        model: 'Opel Vectra',
        power: 110,
        color: 'grey',
        carriage: 'coupe',
        wheelsize: 17
    }
))
