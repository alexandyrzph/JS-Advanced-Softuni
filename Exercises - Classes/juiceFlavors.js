function juiceFlavors(arrOfJuices) {
    let juicesAmount = new Map();
    let juicesBottles = new Map();

    for (let index = 0; index < arrOfJuices.length; index++) {
        let [juice, amount] = arrOfJuices[index].split(' => ');
        amount = Number(amount);

        if (!juicesAmount.has(juice)) {
            juicesAmount.set(juice, 0);
        }

        let totalAmount = juicesAmount.get(juice) + amount;
        if (totalAmount >= 1000) {
            if (!juicesBottles.has(juice)) {
                juicesBottles.set(juice, 0);
            }
            let newBottles = Math.trunc(totalAmount / 1000);
            let totalBottles = juicesBottles.get(juice) + newBottles;
            juicesBottles.set(juice, totalBottles);
        }

        juicesAmount.set(juice, totalAmount % 1000);
    }

    return [...juicesBottles].map(([key, value]) => `${key} => ${value}`).join('\n');
}

console.log(juiceFlavors
    (['Orange => 2000',
        'Peach => 1432',
        'Banana => 450',
        'Peach => 600',
        'Strawberry => 549'
    ]));

juiceFlavors(['Kiwi => 234',
    'Pear => 2345',
    'Watermelon => 3456',
    'Kiwi => 4567',
    'Pear => 5678',
    'Watermelon => 6789'
])