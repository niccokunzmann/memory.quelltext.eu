/*
 * The cards are placed on the table.
 */

var Table = function(elementId) {
        this.elementId = elementId;
        this.cards = [];
        this.cardListeners = [];
    }
    
Table.prototype.element = function() {
        return document.getElementById(this.elementId);
    }
    
Table.prototype.cardClicked = function(aCard) {
        this.cardListeners.forEach(function (listener) {
            listener(aCard);
        });
    }
    
Table.prototype.onCardClicked = function(func) {
        this.cardListeners.push(func);
    }

Table.prototype.addCard = function(aCard) {
        this.cards.push(aCard);
        this.element().appendChild(aCard.asHTMLElement());
        aCard.onCardClicked(this.cardClicked.bind(this));
    }
    
Table.prototype.shuffleCards = function() {
        // convert html element collection to array, see https://stackoverflow.com/a/222847
        var children = [].slice.call(this.element().children);
        shuffle(children);
        for (var i = 0; i < children.length; i++) {
            this.element().appendChild(children[i]);
        }
    }
    
Table.prototype.clean = function() {
        while (this.element().children.length > 0) {
            this.element().removeChild(this.element().children[0]);
        }
        this.cards = [];
    }
    
Table.prototype.hide = function() {
        this.element().classList.add("hidden");
    }
Table.prototype.show = function() {
        this.element().classList.remove("hidden");
    }
    
Table.prototype.fitOnScreen = function() {
        // view port height, see https://stackoverflow.com/a/8876069/1320237
        const maxHeight = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
        var lowerBound = 0;
        var upperBound = maxHeight;
        while (lowerBound + 1 < upperBound) {
            var current = Math.floor((lowerBound + upperBound) / 2);
            scaleAllCardsOnTheTable(current);
            var height = this.height();
            console.log("test card size: maxHeight: " + maxHeight +
                        "\theight: " + height +
                        "\tlowerBound: " + lowerBound +
                        "\tupperBound: " + upperBound +
                        "\tcurrent:" + current);
            if (height < maxHeight) {
                lowerBound = current;
            } else {
                upperBound = current;
            }
        }
        console.log("selected: " + lowerBound);
        scaleAllCardsOnTheTable(lowerBound);
    }
    
Table.prototype.height = function() {
        // see https://stackoverflow.com/a/294273/1320237
        return this.element().getBoundingClientRect().height;
    }
    
Table.prototype.allCardsArePaired = function() {
        return this.cards.every(function(card) {return card.isPaired();});
    }
