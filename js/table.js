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
        // convert html element collection to array, see https://stackoverflow.com/a/222847
        var children = [].slice.call(this.element.children);
        shuffle(children);
        for (var i = 0; i < children.length; i++) {
            this.element.appendChild(children[i]);
        }
    }
    
    clean() {
        while (this.element.children.length > 0) {
            this.element.removeChild(this.element.children[0]);
        }
    }
}
