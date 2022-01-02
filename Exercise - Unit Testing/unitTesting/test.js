const {expect} = require('chai');
const {createCalculator} = require("./module");

describe('Testing for function createCalculator', () => {
    let instance = null;

    beforeEach(() => {
        instance = createCalculator();
    })

    it('Has all methods', () => {
        expect(instance).to.haveOwnProperty('add');
        expect(instance).to.haveOwnProperty('subtract');
        expect(instance).to.haveOwnProperty('get');
    })
    it('starts empty', () => {
        expect(instance.get()).to.equal(0)
    })
    it('adds single number', () => {
        instance.add(1);
        expect(instance.get()).to.equal(1);
    })
    it('adds multiple numbers', () => {
        instance.add(1);
        instance.add(2);
        expect(instance.get()).to.equal(3);
    })
    it('subtract single number', () => {
        instance.subtract(1);
        expect(instance.get()).to.equal(-1);
    })
    it('subtract multiple numbers', () => {
        instance.subtract(1);
        instance.subtract(2);
        expect(instance.get()).to.equal(-3);
    })
    it('adds and subtracts', () => {
        instance.add(1);
        instance.subtract(2);
        expect(instance.get()).to.equal(-1);
    })
    it('works with numbers as strings', () => {
        instance.add('1');
        instance.add('2');
        instance.subtract('4');
        expect(instance.get()).to.equal(-1);
    })
})
