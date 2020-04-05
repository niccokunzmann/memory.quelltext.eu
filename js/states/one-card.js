/* This is the state of the game when one card is visible.
 */
class OneCardVisibleState {
    
    constructor (aCard) {
        this.card = aCard;
        aCard.show();
    }
    
    onCardClicked(aCard) {
        if (aCard == this.card || aCard.isPaired) {
            return this;
        }
        if (aCard.value == this.card.value) {
            return new MatchFoundState(this.card, aCard);
        }
        return new DifferentCardsState(this.card, aCard);
    }
    
    toString() {
        return "OneCardVisibleState(" + this.card + ")";
    }
}