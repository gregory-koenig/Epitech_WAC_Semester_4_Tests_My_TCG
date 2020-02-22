describe('Hand', () => {
    var config = {
        'cards': [0, 1, 2, 3, 4]
    }

    const handClass = require('../src/models/hand')
    var hand

    beforeEach(() => {
        hand = new handClass(config)
    })

    it('should be able to add a card to the hand', () => {
        expect(hand.addCard(5)).toBe(true)
        expect(hand.cards[hand.cards.length - 1]).toBe(5)
        expect(hand.addCard(6)).toBe(true)
        expect(hand.cards[hand.cards.length - 1]).not.toBe(42)
    })

    it('should be able to remove a certain card from the hand', () => {
        var initalLength = hand.cards.length
        hand.removeCard(Math.floor(Math.random() * hand.cards.length))
        expect(hand.cards.length).toEqual(initalLength - 1)
    })

    it('should be able to return the hand', () => {
        expect(hand.getAllCards()).toBe(hand.cards)
    })

    it('should be able to return the number of cards in the hand', () => {
        expect(hand.getCardsCount()).toEqual(jasmine.any(Number))
        expect(hand.getCardsCount()).toBe(hand.cards.length)
    })
})