function editElement(element, match, replacer) {
    // TODO
    const content = element.textContent;
    const matcher = new RegExp(match, 'g');
    const edited = content.replace(matcher, replacer);
    element.textContent = edited;
}
//document.getElementById('e1'), '%insert name here%', 'Document Object Model'