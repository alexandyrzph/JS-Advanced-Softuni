function sameNumbers(num) {

    let sum = 0;
    let numAsStr = num.toString();
    let isEqual = true;
    for (let i = 0; i < numAsStr.length; i++) {
        
        let current = Number(numAsStr[i]);
        sum += current;

        for(j = i+1;j <numAsStr.length; j++) {
            let nextNum = Number(numAsStr[j]);
            if(current !== nextNum) {
                isEqual = false;
            }
        }
    }
    console.log(isEqual);
    console.log(sum);
}
sameNumbers(2222222);
sameNumbers(1234);