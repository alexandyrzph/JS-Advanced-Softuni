function solve(arrStr) {

    let newObj = {};
    for (const el of arrStr) {
        let [towns, product, price] = el.split(' | ');
        price = Number(price);

        if (!newObj[product]) {
            newObj[product] = {};
        }
        newObj[product][towns] = price;
    }

    for (const el in newObj) {
        const sorted = Object.entries(newObj[el]).sort((a, b) => a[1] - b[1]);
        console.log(`${el} -> ${sorted[0][1]} (${sorted[0][0]})`)
    }

}

solve(['Sample Town | Sample Product | 1000',
    'Sample Town | Orange | 2',
    'Sample Town | Peach | 1',
    'Sofia | Orange | 3',
    'Sofia | Peach | 2',
    'New York | Sample Product | 1000.1',
    'New York | Burger | 10']
);