
class Card {
    constructor(element) {
        this.element = element;
    }
    
    get value() {
        return this.element.getAttribute("value");
    }
    
    show() {
        this.element.classList.add("visible");
    }
    
    hide() {
        this.element.classList.remove("visible");
    }
    
    pair() {
        this.element.classList.add("paired");
        this.element.classList.remove("visible");
    }
    
    get isPaired() {
        return this.element.classList.contains("paired");
    }
    
    toString() {
        return "Card(" + this.value + (this.isPaired? ", paired" : "") + ")";
    }
}

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

/* This is the state of the game when two cards are visible but they are not a pair.
 */
class DifferentCardsState {
    constructor (card1, card2) {
        this.card1 = card1;
        this.card2 = card2;
        card1.show();
        card2.show();
    }
    
    onCardClicked(aCard) {
        if (aCard.isPaired) {
            return this;
        }
        this.card1.hide();
        this.card2.hide();
        if (aCard == this.card1 || aCard == this.card2) {
            return new InitialState();
        }
        return new OneCardVisibleState(aCard);
    }
    
    toString() {
        return "DifferentCardsState(" + this.card1 + ", " + this.card2 + ")";
    }
}

var gameState = new InitialState();

function clickCard(cardElement) {
    var aCard = cardElement.card = cardElement.card || new Card(cardElement);
    newGameState = gameState.onCardClicked(cardElement.card);
    console.log(gameState + " + " + aCard + " => " + newGameState);
    gameState = newGameState;
}

function x() {
    console.log("click: " + getCardValue(aCard));
    if (aCard.classList.contains("paired")) {
        return;
    }
    showCard(aCard);
    if (lastClicked.length == 2) {
        hideCard(lastClicked[0]);
        hideCard(lastClicked[1]);
        lastClicked = [];
    } else if (lastClicked.length == 1) {
        if (aCard == lastClicked[0]) {
            // same card was clicked
        } else if (getCardValue(lastClicked[0]) == getCardValue(aCard)) {
            // second card was clicked
            lastClicked[0].classList.add("paired");
            aCard.classList.add("paired");
        }
    }
    if (!lastClicked.includes(aCard)) {
        lastClicked.push(aCard);
    }
}

window.addEventListener("load", function() {
    var children = table.children;
    shuffle(children);
    for (var i = 0; i < children.length; i++) {
        table.appendChild(children[i]);
    }
});
