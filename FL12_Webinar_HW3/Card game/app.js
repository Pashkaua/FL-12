class Deck {

    constructor() {
        this.cards = [];
        this.count = this.cards.length;
        this.createDeck();
        this.shuffle();
    }


    createDeck() {
        let suits = ['clubs', 'diamonds', 'hearts', 'spades'];
        let ranks = ['ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'jack', 'queen', 'king'];
        let values = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

        for (let i = 0; i < suits.length; i++) {
            for (let j = 0; j < ranks.length; j++) {
                this.cards.push(new Card(suits[i], ranks[j], values[j]));
            }
        }
    }

    shuffle() {
        let location1, location2, tmp;
        for (let i = 0; i < 1000; i++) {
            location1 = Math.floor((Math.random() * this.cards.length));
            location2 = Math.floor((Math.random() * this.cards.length));
            tmp = this.cards[location1];
            this.cards[location1] = this.cards[location2];
            this.cards[location2] = tmp;
        }
    }
    draw(n) {
        return this.cards.splice(-1, n);
    }

}

class Card {
    constructor(suit, rank, value) {
        this.suit = suit;
        this.rank = rank;
        this.value = value;
    }
    get isFaceCard() {
        this.ranks <= 10 ? false : true
    }
    toString() {
        return (`"${this.rank} of ${this.suit}"`);
    }
    static compare(cardOne, cardTwo) {
        if (cardOne.value > cardTwo.value) {
            return 'cardOne';
        } else if ((cardOne.value < cardTwo.value)) {
            return 'cardTwo';
        }
    }
}

class Player {
    constructor(name) {
        this.name = name;
        this.wins = 0;
        this.deck = new Deck;
    }
    static play(playerOne, playerTwo) {
        const plOne = new Player(playerOne);
        const plTwo = new Player(playerTwo);
        let oneLengh = plOne.deck.cards.length;
        let twoLength = plTwo.deck.cards.length;

        while (oneLengh > 0 && twoLength > 0) {
            if (Card.compare(plOne.deck.cards[oneLengh - 1], plTwo.deck.cards[twoLength - 1]) === 'cardOne') {
                plOne.wins++;
            } else if (Card.compare(plOne.deck.cards[oneLengh - 1], plTwo.deck.cards[twoLength - 1]) === 'cardTwo') {
                plTwo.wins++;
            }

            oneLengh--;
            twoLength--;
            plOne.deck.cards.pop();
            plTwo.deck.cards.pop();
        }
        if (plOne.wins === plTwo.wins) {
            console.log('End of game, draw');
        }
        else if (plOne.wins > plTwo.wins) {
            console.log(`${plOne.name} wins ${plOne.wins} to ${plTwo.wins}`);
        } else {
            console.log(`${plTwo.name} wins ${plTwo.wins} to ${plOne.wins}`);
        }

    }
}


Player.play('Ivan', 'Petro');