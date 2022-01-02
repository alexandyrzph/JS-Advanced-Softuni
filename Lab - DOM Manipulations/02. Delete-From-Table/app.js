function deleteByEmail() {
    const text = document.getElementsByName('email')[0].value;
    const tr = document.querySelectorAll('tbody tr');
    let result = document.getElementById('result');
    for (const item of tr) {
        let itemText = item.textContent;
        if(itemText.indexOf(text) > -1) {
            item.remove();
            result.textContent = 'Deleted'
        } else {
            result.textContent = 'Not found.'
        }
    }

}