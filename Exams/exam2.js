function solve(input) {
    let myHealth = 100;
    let myBitcoins = 0;
    let dungeons = input.split('|');
    let rooms = 0;
    let room = dungeons.shift();

    while (dungeons.length >= 0) {
        
        rooms++;
        let [command, num] = room.split(' ');
        switch (command) {
            case "potion":
                let amountHealed;
                if (myHealth + Number(num) >= 100) {
                    amountHealed = 100-myHealth;
                    myHealth = 100;
                } else {
                    myHealth += Number(num);
                    amountHealed = num;
                }
                console.log(`You healed for ${amountHealed} hp.`);
                console.log(`Current health: ${myHealth} hp.`);
                break;
            case "chest":
                myBitcoins+= Number(num);
                console.log(`You found ${num} bitcoins.`);
                break;
            default:
                myHealth -= Number(num);
                if (myHealth > 0) {
                    console.log(`You slayed ${command}.`);
                } else {
                    console.log(`You died! Killed by ${command}.`);
                    console.log(`Best room: ${rooms}`);
                    return;
                }
                break;
        }
        if (dungeons.length == 0) {
            break;
        }
        room = dungeons.shift();
    }
    if (dungeons.length == 0) {
        console.log(`You've made it!`);
        console.log(`Bitcoins: ${myBitcoins}`);
        console.log(`Health: ${myHealth}`);
    }
}
solve("rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000");
console.log(`-----------`);
solve("cat 10|potion 30|orc 10|chest 10|snake 25|chest 110");