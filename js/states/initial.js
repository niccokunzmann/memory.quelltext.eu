/* This is the state of the game when no cards are visible.
 */

var InitialState = function(){};

InitialState.prototype.onCardClicked = function(aCard) {
        if (aCard.isPaired()) {
            return this;
        }
        return new OneCardVisibleState(aCard);
    }
    
InitialState.prototype.toString = function() {
        return "InitialState()";
    }
