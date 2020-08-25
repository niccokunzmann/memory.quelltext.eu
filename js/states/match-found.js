/* This is the state of the game when two cards are a pair.
 */
var MatchFoundState = function (card1, card2) {
        this.card1 = card1;
        this.card2 = card2;
        card1.pair();
        card2.pair();
    }
    
MatchFoundState.prototype.onCardClicked = function(aCard) {
        return new InitialState().onCardClicked(aCard);
    }
    
MatchFoundState.prototype.toString = function() {
        return "MatchFoundState(" + this.card1 + ", " + this.card2 + ")";
    }
