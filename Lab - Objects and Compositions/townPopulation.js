function createRegistry(array) {
    let newObj = {};
    array.forEach((el) => {
        let [town, population] = el.split(' <-> ');
        if(newObj[town]) {
            let oldPopulation = newObj[town];
            let newPopulation = oldPopulation+=Number(population);
            newObj[town] = newPopulation;
        } else {
            newObj[town] = Number(population);
        }
    });
    for (let el in newObj) {
        console.log(`${el} : ${newObj[el]}`);
    }
}
createRegistry(['Istanbul <-> 100000',
    'Honk Kong <-> 2100004',
    'Jerusalem <-> 2352344',
    'Mexico City <-> 23401925',
    'Istanbul <-> 1000'
]);