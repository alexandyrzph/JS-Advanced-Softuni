function solve(input) {

    let shopList = input.shift().split('!');
    let command = input.shift();

    while (command !== "Go Shopping!") {
        let [command1, item, newItem] = command.split(' ');

        switch (command1) {
            case 'Urgent':
                urgent(shopList, item);
                break;
            case 'Unnecessary':
                unnecessary(shopList, item);
                break;
            case 'Correct':
                correct(shopList, item, newItem);
                break;
            case 'Rearrange':
                rearrange(shopList, item);
                break;
        }
        command = input.shift();
    }
    console.log(shopList.join(', '));
    // array.unshift() adds item to beggining list
    function urgent(array, item) {
        if (!array.includes(item)) {
            array.unshift(item);
        }
    }
    //array.includes() checks if item is already in the list
    //array.splice() removes item by index 
    function unnecessary(array, item) {
        if (array.includes(item)) {
            let indexOfEl = array.indexOf(item);
            array.splice(indexOfEl, 1);
        }
    }

    function correct(array, item, newItem) {
        if (array.includes(item)) {
            let indexOfEl = array.indexOf(item);
            array.splice(indexOfEl, 1, newItem);
        }
    }

    function rearrange(array, item) {
        // move item by name to end of list
        if (array.includes(item) == true) {
            let index = array.indexOf(item);
            array.splice(index, 1);
            array.push(item);
        }
    }
}
solve(["Tomatoes!Potatoes!Bread",
    "Unnecessary Milk",
    "Urgent Tomatoes",
    "Go Shopping!"
]);
solve(["Milk!Pepper!Salt!Water!Banana",
    "Urgent Salt",
    "Unnecessary Grapes",
    "Correct Pepper Onion",
    "Rearrange Grapes",
    "Correct Tomatoes Potatoes",
    "Go Shopping!"
]);