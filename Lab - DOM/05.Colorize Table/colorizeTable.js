function colorize() {
    const row = document.getElementsByTagName('tr');

    for (let i = 0; i < row.length; i++) {
        if (i % 2 == 1) {
            row[i].style.background = 'teal';
        }
    }

}