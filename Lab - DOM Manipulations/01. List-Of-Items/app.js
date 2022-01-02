function addItem() {
    const items = document.getElementById('items');
    const liElement = document.createElement('li');
    liElement.textContent = document.getElementById('newItemText').value;
    items.appendChild(liElement);
    document.getElementById('newItemText').value = '';
}