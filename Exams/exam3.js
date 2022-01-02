function solve(input) {

    let journal = input.shift().split(', ');
    let command = input.shift().split(' - ');

    while (command != 'Craft!') {
        let [act, item] = command;
        switch (act) {
            case 'Collect': // you should add that item if it doesn't exist in your invertory
                collect(journal, item);
                break;
            case 'Drop': // if item exist it removes it
                drop(journal, item);
                break;
            case 'Combine Items': // add new item after the old one
                let [oldItem, brandNewItem] = item.split(':')
                combineItems(journal, oldItem, brandNewItem);
                break;
            case 'Renew': // put the item on the end 
                renew(journal, item);
                break;
        }
        command = input.shift().split(' - ');
    }

    console.log(journal.join(', '));

    function collect(array, item) {
        if (!array.includes(item)) {
            array.push(item);
        }
    }

    function drop(array, item) {
        if (array.includes(item)) {
            array.splice(array.indexOf(item), 1);
        }
    }

    function combineItems(array, item, newItem) {
        if (array.includes(item)) {
            let removed = array.splice(array.indexOf(item), 1, newItem);
            array.splice(array.indexOf(removed), 0, removed)
        }
    }

    function renew(array, item) {
        if (array.includes(item)) {
            array.push(array.splice(array.indexOf(item), 1));
        }
    }
}
solve([
    'Iron, Sword',
    'Drop - Bronze',
    'Combine Items - Sword:Bow',
    'Renew - Iron',
    'Craft!'
]);
solve([
    'Iron, Wood, Sword',
    'Collect - Gold',
    'Drop - Wood',
    'Craft!'
]);