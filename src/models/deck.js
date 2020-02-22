class Deck {

    constructor(config) {
        this.deck = config.cards
    }

    shuffle() {
        if (this.deck.length > 1) {
            var a = this.deck

            for (var i = this.deck.length - 1; i > 0; i--) {
                var j = Math.floor(Math.random() * (i + 1));
                [this.deck[i], this.deck[j]] = [this.deck[j], this.deck[i]]
            }

            this.deck = a
            return true
        }
        return false
    }

    draw() {
        if (this.deck.length !== 0) return this.deck.shift()
        return false
    }

    getCardsCount() {
        return this.deck.length
    }

    insertAt(card, position = this.deck.length) {
        this.deck.splice(position, 0, card)
    }
}

module.exports = Deck