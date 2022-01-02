const myMap = new Map();

console.log(myMap);

myMap.set('firstKey', 5);
myMap.set('secondKey', 3);
// like Object.entris
for (const [key, value] of myMap) {
    console.log(key,value);
}

const entries = myMap.entries();
const keys = myMap.keys();
const values = myMap.values();

console.log(keys);
console.log(values);