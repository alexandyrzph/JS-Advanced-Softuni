function encodeAndDecodeMessages() {
    const main = document.querySelector('#main')
    const firstButton = main.children[0].querySelector('button')
    const secondButton = main.children[1].querySelector('button')
    firstButton.addEventListener('click', encode);
    secondButton.addEventListener('click', decode);

    function encode(e) {
        let textToEncode = e.target.parentElement.querySelector('textarea').value;
        let encodedString = '';
        for (let i = 0; i < textToEncode.length; i++) {
            let currentLetter = textToEncode[i];
            let asciiNumOfStr = currentLetter.charCodeAt(0) + 1;
            encodedString += String.fromCharCode(asciiNumOfStr)
        }
        e.target.parentElement.querySelector('textarea').value = '';
        secondButton.parentElement.querySelector('textarea').value = encodedString;
    }

    function decode(e) {
        let textToDecode = e.target.parentElement.querySelector('textarea').value;
        let decodedStr = '';
        for (let i = 0; i < textToDecode.length; i++) {
            let currentLetter = textToDecode[i];
            let asciiNumOfStr = currentLetter.charCodeAt(0) - 1;
            decodedStr += String.fromCharCode(asciiNumOfStr)
        }
        e.target.parentElement.querySelector('textarea').value = decodedStr;
    }
}