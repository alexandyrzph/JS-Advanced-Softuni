function playingCards(face, suit) {

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

let card1 = playingCards('A','S');
console.log(card1.toString())
let card2 = playingCards('A', 'S');
console.log(card2.toString())
let card3 = playingCards('10', 'H');
console.log(card3.toString())
let card4 = playingCards('1', 'C');
console.log(card4.toString())