function solve(array) {
    let arr = [];

    let tableHead = array.shift().match(/[A-Za-z]+/g);
    let [town, latit, longit] = tableHead;

    for (let row of array) {
        let obj = {};
        let lineArr = row.match(/([^|]+)/g);
        let [townName, latitNum, longitNum] = lineArr;

        townName = townName.trim();
        latitNum = Number(latitNum);
        longitNum = Number(longitNum);
        latitNum = Number(latitNum.toFixed(2));
        longitNum = Number(longitNum.toFixed(2));

        obj[town] = townName;
        obj[latit] = latitNum;
        obj[longit] = longitNum;
        arr.push(obj);
    }
    return JSON.stringify(arr);
}

// console.log(solve(['| Town | Latitude | Longitude |',
//     '| Sofia | 42.696552 | 23.32601 |',
//     '| Beijing | 39.913818 | 116.363625 |'
// ]));

console.log(solve(['| Town | Latitude | Longitude |',
    '| Veliko Turnovo | 43.0757 | 25.6172 |',
    '| Monatevideo | 34.50 | 56.11 |'
]));
console.log(solve(['| Town | Latitude | Longitude |',
    '| Veliko$  Turnovo | 43.0757 | 25.6172 |',
    '| Monatevideo | 34.50 | 56.11 |'
]));