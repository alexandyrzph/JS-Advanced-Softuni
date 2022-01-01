function search() {

    const textInput = document.getElementById('searchText').value;
    const elements = document.querySelectorAll('ul li');
    let matches = 0;

    for (let i = 0; i < elements.length; i++) {
        if (elements[i].style.fontWeight == 'bold' && elements[i].style.textDecoration == 'underline') {
            elements[i].style.fontWeight = 'normal';
            elements[i].style.textDecoration = 'none';
        } else {
            if (elements[i].textContent.indexOf(textInput) > -1) {
                matches++;
                elements[i].style.fontWeight = 'bold';
                elements[i].style.textDecoration = 'underline';
            }
        }
    }
    document.getElementById('result').textContent = `${matches} matches found`;
}

