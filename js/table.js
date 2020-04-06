/*
 * The cards are placed on the table.
 */

class Table {
    
    constructor(elementId) {
        this.elementId = elementId;
        this.cards = [];
        this.cardListeners = [];
    }
    
    get element() {
        return document.getElementById(this.elementId);
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
        this.cards = [];
    }
    
    hide() {
        this.element.classList.add("hidden");
    }
    show() {
        this.element.classList.remove("hidden");
    }
    
    fitOnScreen() {
        // view port height, see https://stackoverflow.com/a/8876069/1320237
        const maxHeight = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
        var lowerBound = 0;
        var upperBound = maxHeight;
        while (lowerBound + 1< upperBound) {
            var current = Math.round((lowerBound + upperBound) / 2);
            scaleAllCardsOnTheTable(current);
            var height = this.height;
            console.log("test card size: maxHeight: " + maxHeight + "\theight: " + height + "\tlowerBound: " + lowerBound + "\tupperBound: " + upperBound + "\tcurrent:" + current);
            if (height < maxHeight) {
                lowerBound = current;
            } else {
                upperBound = current;
            }
        }
    }
    
    get height() {
        // see https://stackoverflow.com/a/294273/1320237
        return this.element.getBoundingClientRect().height;
    }
    
    allCardsArePaired() {
        return this.cards.every(function(card) {return card.isPaired;});
    }
}
