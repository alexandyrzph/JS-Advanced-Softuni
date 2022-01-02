const { expect, assert } = require('chai');
const { library } = require("./library");

describe('Test', () => {
    it('Test for calc Book', () => {
        expect(library.calcPriceOfBook('Harry', 1980)).to.equal(`Price of Harry is 10.00`);
        expect(library.calcPriceOfBook('Harry', 1979)).to.equal(`Price of Harry is 10.00`);
        expect(library.calcPriceOfBook('Harry', 1981)).to.equal(`Price of Harry is 20.00`);
        expect(() => library.calcPriceOfBook(123, 1980)).to.throw("Invalid input");
        expect(() => library.calcPriceOfBook('Harry', '1980')).to.throw("Invalid input");
        expect(() => library.calcPriceOfBook('Harry', 1980.82)).to.throw("Invalid input");
    });

    it('Test for findBook', () => {
        expect(library.findBook(["Troy", "Life Style", "Torronto"], 'Troy')).to.equal('We found the book you want.');
        expect(library.findBook(["Troy", "Life Style", "Torronto"], 'dawdw')).to.equal('The book you are looking for is not here!');
        expect(() => library.findBook([], 'dawdw')).to.throw('No books currently available');
    })

    it('Test for arrangeTheBooks', () => {
        expect(() => library.arrangeTheBooks(1.654)).to.throw('Invalid input');
        expect(() => library.arrangeTheBooks(-1.654)).to.throw('Invalid input');
        expect(() => library.arrangeTheBooks(-1)).to.throw('Invalid input');
        expect(library.arrangeTheBooks(40)).to.equal('Great job, the books are arranged.');
        expect(library.arrangeTheBooks(41)).to.equal('Insufficient space, more shelves need to be purchased.');
        expect(library.arrangeTheBooks(39)).to.equal('Great job, the books are arranged.');
    })
})