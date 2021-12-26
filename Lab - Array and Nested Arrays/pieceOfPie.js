function pieceOfPie(flavors, target1, target2) {
    let index1 = flavors.indexOf(target1);
    let index2 = flavors.indexOf(target2);
    let newArr = flavors.slice(Number(index1), Number(index2 + 1));
    return newArr;
}
console.log(pieceOfPie(['Pumpkin Pie',
        'Key Lime Pie',
        'Cherry Pie',
        'Lemon Meringue Pie',
        'Sugar Cream Pie'
    ],
    'Key Lime Pie',
    'Lemon Meringue Pie'
));
console.log(pieceOfPie(['Apple Crisp',
        'Mississippi Mud Pie',
        'Pot Pie',
        'Steak and Cheese Pie',
        'Butter Chicken Pie',
        'Smoked Fish Pie'
    ],
    'Pot Pie',
    'Smoked Fish Pie'
));