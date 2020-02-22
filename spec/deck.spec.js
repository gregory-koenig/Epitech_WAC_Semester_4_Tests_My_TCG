describe('Deck', () => {
    const config = {
        'cards': [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
    }
    const deckClass = require('../src/models/deck')
    var deck

    beforeEach(() => {
        deck = new deckClass(config)
    })

    it('should be able to shuffle the cards', () => {
        expect(deck.deck.length).toBeGreaterThan(1)
        expect(deck.shuffle()).toBeBoolean()
    })

    it('should be able to return the first card of the deck', () => {
        expect(deck.deck.length).toBeGreaterThan(0)
        expect(deck.deck[0]).toEqual(deck.draw())
        expect(deck.draw()).not.toEqual(deck.deck[Math.floor(Math.random() * deck.deck.length)])
    })

    it('should be able to return the number of element in the array', () => {
        expect(deck.getCardsCount()).toEqual(jasmine.any(Number))
        expect(deck.getCardsCount()).toEqual(deck.deck.length)
    })

    it('should be able to insert a card at a certain position in the deck', () => {
        var index = Math.floor(Math.random() * deck.deck.length)
        deck.insertAt('UnitTest', index)
        expect(deck.deck[index]).toEqual('UnitTest')

        deck.deck.splice(index, 1)
        deck.insertAt('UnitTest', 0)
        expect(deck.deck[1]).not.toEqual('UnitTest')
    })
})