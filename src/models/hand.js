class Hand {
    constructor(config) {
        this.cards = config.cards
        typeof config.limit === "undefined" ? this.limit = 7 : this.limit = config.limit
    }

    addCard(card) {
        if (this.cards.length <= this.limit) {
            this.cards.push(card)
            return true
        }
        return false
    }

    removeCard(position) {
        return typeof this.cards[position] === "undefined" ? false : this.cards.splice(position, 1)
    }

    getAllCards() {
        return this.cards
    }

    getCardsCount() {
        return this.cards.length
    }

}

module.exports = Hand