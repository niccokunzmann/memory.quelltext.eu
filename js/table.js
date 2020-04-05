/*
 * The cards are placed on the table.
 */

class Table {
    
    constructor(element) {
        this.element = element;
        this.cards = [];
        this.cardListeners = [];
    }
    
    cardClicked(aCard) {
        this.cardListeners.forEach(function (listener) {
            listener(aCard);
        });
    }
    
    onCardClicked(func) {
        this.cardListeners.push(func);
    }
    
    addCard(aCard) {
        this.cards.push(aCard);
        this.element.appendChild(aCard.asHTMLElement());
        aCard.onCardClicked(this.cardClicked.bind(this));
    }
    
    shuffleCards() {
        var children = table.children;
        shuffle(children);
        for (var i = 0; i < children.length; i++) {
            table.appendChild(children[i]);
        }
    }
}
