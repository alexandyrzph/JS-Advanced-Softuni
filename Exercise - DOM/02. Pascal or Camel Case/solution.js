function solve() {
    //TODO...
    let textValue = document.getElementById('text').value;
    let newValue;
    const naming = document.getElementById('naming-convention');

    function camalize(str) {
        return str.toLowerCase().replace(/[^a-zA-Z0-9]+(.)/g, (m, chr) => chr.toUpperCase());
    }

    function toTitles(s) {
        return s.replace(/\w\S*/g, function (t) {
            return t.charAt(0).toUpperCase() + t.substr(1).toLowerCase();
        });
    }

    if (naming.value == 'Camel Case') {
        newValue = camalize(textValue);
        document.getElementById('result').textContent = newValue;
    } else if (naming.value == 'Pascal Case') {
        newValue = toTitles(textValue);
        document.getElementById('result').textContent = newValue.split(' ').join('');
    } else {
        document.getElementById('result').textContent = 'Error!';
    }
}