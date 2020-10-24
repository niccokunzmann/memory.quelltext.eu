/* This is the state of the game when one card is visible.
 */

var OneCardVisibleState = function(aCard) {
        this.card = aCard;
        aCard.show();
    }
    
OneCardVisibleState.prototype.onCardClicked = function(aCard) {
        if (aCard == this.card || aCard.isPaired()) {
            return this;
        }
        if (aCard.wantsToBePairedWith(this.card) && this.card.wantsToBePairedWith(aCard)) {
            return new MatchFoundState(this.card, aCard);
        }
        return new DifferentCardsState(this.card, aCard);
    }
    
OneCardVisibleState.prototype.toString = function() {
        return "OneCardVisibleState(" + this.card + ")";
    }
