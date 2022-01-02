function solve(array) {
    // getting the concealed message in variable;
    let hiddenMessage = array.shift();

    // parsing the commands;
    let commands = array.shift();
    while (commands != 'Reveal') {
        let [command, argument] = commands.split(':|:');
        switch (command) {
            case 'InsertSpace':
                let index = Number(argument);
                insertSpace(hiddenMessage, index);
                break;
            case 'Reverse':

                break;
            case 'ChangeAll':

                break;
        }

        commands = array.shift();
    }

    function insertSpace(str, index) {
        str = str.substring(0, index) + ' ' + str.substring(index, str.length);
    }

    function reverse() {

    }

    function changeAll() {

    }

    console.log(hiddenMessage);

    // print the output;


}
solve([
    'heVVodar!gniV',
    'ChangeAll:|:V:|:l',
    'Reverse:|:!gnil',
    'InsertSpace:|:5',
    'Reveal'
]);