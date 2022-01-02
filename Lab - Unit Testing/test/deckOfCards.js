function printDeckOfCards(cards) {
    console.log(cards.map(createCard).join(' '));
    function createCard(face, suit) {

        let validFaces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];

        const suits = {
            'S': '\u2660',
            'H': '\u2665',
            'D': '\u2666',
            'S': '\u2663',
        };

        if (!Object.keys(suits).includes(suit)) {
            throw new Error('Invalid suit');
        }
        if (!validFaces.includes(face)) {
            throw new Error('Invalid face')
        }
        return {
            face,
            suit: suits[suit],
            toString() {
                return this.face + this.suit;
            }
        };

    }


}
printDeckOfCards(['AS', '10D', 'KH', '2C'])
printDeckOfCards(['5S', '3D', 'QD', '1C'])
