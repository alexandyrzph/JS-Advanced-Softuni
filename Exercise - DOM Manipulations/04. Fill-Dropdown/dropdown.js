function addItem() {
    const textItem = document.getElementById('newItemText');
    const valueItem = document.getElementById('newItemValue');
    const menu = document.getElementById('menu');
    const createdElement = document.createElement('option');
    createdElement.value = valueItem.value;
    createdElement.textContent = textItem.value;
    menu.appendChild(createdElement);
    textItem.value = '';
    valueItem.value = '';
}