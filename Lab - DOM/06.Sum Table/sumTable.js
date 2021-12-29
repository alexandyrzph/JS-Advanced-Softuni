function sumTable() {

    let column = document.getElementsByTagName('td');
    console.log(column);
    let sum = 0;
    for (let i = 0; i < column.length; i++) {
        if (column[i].textContent == '') {
            column[i].textContent = sum;
            break;
        }
        if (i % 2 == 1) {

            sum+=Number(column[i].textContent);
            
        }
    }


}