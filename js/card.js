/*
 * The user interacts with the card.
 *
 * The card has an HTML element to interact with the user.
 */


class Card {
    constructor(element, equivalenceId) {
        this.equivalenceId = equivalenceId;
        this.cardListeners = [];
        this.element = element;
        this.element.addEventListener("click", this.cardClicked.bind(this));
    }
    
    cardClicked() {
        var aCard = this;
        this.cardListeners.forEach(function (listener) {
            listener(aCard);
        });
    }
    
    onCardClicked(func) {
        this.cardListeners.push(func);
    }
    
    get value() {
        return this.equivalenceId;
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
    
    asHTMLElement() {
        return this.element;
    }
}

Card.newSheetOfPaper = function (equivalenceId, html, classList) {
    var root = document.createElement("a");
    var content = document.createElement("span");
    root.appendChild(content);
    content.innerHTML = html;
    classList.forEach(function (cls) {
        root.classList.add(cls);
    });
    root.classList.add("card");
    content.classList.add("content");
    return new Card(root, equivalenceId);
}