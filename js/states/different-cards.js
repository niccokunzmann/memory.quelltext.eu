/* This is the state of the game when two cards are visible but they are not a pair.
 */
var DifferentCardsState  = function(card1, card2) {
        this.card1 = card1;
        this.card2 = card2;
        card1.show();
        card2.show();
    }
    
DifferentCardsState.prototype.onCardClicked = function(aCard) {
        if (aCard.isPaired()) {
            return this;
        }
        this.card1.hide();
        this.card2.hide();
        if (aCard == this.card1 || aCard == this.card2) {
            return new InitialState();
        }
        return new OneCardVisibleState(aCard);
    }
    
DifferentCardsState.prototype.toString = function() {
        return "DifferentCardsState(" + this.card1 + ", " + this.card2 + ")";
    }
