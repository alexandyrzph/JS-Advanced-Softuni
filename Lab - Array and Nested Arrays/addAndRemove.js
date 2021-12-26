function addAndRemove(array) {

    let newArray = [];
    let num = 0;
    for (let i = 0; i < array.length; i++) {

        num++;
        if (array[i] == 'add') {
            newArray.push(num);
        } else if (array[i] == 'remove') {
            newArray.pop();
        }
    }
    if (newArray.length == 0) {
        console.log('Empty');
    } else {
        console.log(newArray.join('\n'));
    }
}
addAndRemove(['add', 
'add', 
'add', 
'add']
);
console.log('-----------');
addAndRemove(['add',
    'add',
    'remove',
    'add',
    'add'
])
console.log(`----------`);
addAndRemove(['remove',
    'remove',
    'remove'
]);