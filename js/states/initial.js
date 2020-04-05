/* This is the state of the game when no cards are visible.
 */

class InitialState {
    onCardClicked(aCard) {
        if (aCard.isPaired) {
            return this;
        }
        return new OneCardVisibleState(aCard);
    }
    
    toString() {
        return "InitialState()";
    }
}
