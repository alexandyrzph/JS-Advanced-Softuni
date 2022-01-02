function addItem() {
    //TODO...
    const input = document.getElementById('newItemText');
    const liElement = document.createElement('li');
    liElement.textContent = input.value;

    const button = document.createElement('a');
    button.href = '#'
    button.textContent = '[Delete]';
    button.addEventListener('click', removeElement);

    liElement.appendChild(button);

    document.getElementById('items').appendChild(liElement);
    input.value = '';

    function removeElement(ev) {
        const parent = ev.target.parentNode;
        parent.remove();
    }

}