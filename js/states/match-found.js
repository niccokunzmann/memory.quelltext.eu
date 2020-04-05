/* This is the state of the game when two cards are a pair.
 */
class MatchFoundState {
    constructor (card1, card2) {
        this.card1 = card1;
        this.card2 = card2;
        card1.pair();
        card2.pair();
    }
    
    onCardClicked(aCard) {
        return new InitialState().onCardClicked(aCard);
    }
    
    toString() {
        return "MatchFoundState(" + this.card1 + ", " + this.card2 + ")";
    }
}
