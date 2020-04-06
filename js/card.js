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


class CardFactory {
    constructor(equivalenceId, html, classList) {
        this.equivalenceId = equivalenceId;
        this.html = html;
        this.classList = classList;
    }
    
    getRootCardElement() {
        var root = document.createElement("a");
        var content = document.createElement("span");
        root.appendChild(content);
        content.innerHTML = this.html;
        this.classList.forEach(function (cls) {
            root.classList.add(cls);
        });
        root.classList.add("card");
        content.classList.add("content");
        return root;
    }
    
    sheetOfPaper(equivalenceId, html, classList) {
        var root = this.getRootCardElement();
        setPaperBackgroundOf(root);
        return new Card(root, this.equivalenceId);
    }
    
    setImagePath(root, path, cls) {
        var image = document.createElement("img");
        image.src = path;
        image.classList.add(cls);
        root.appendChild(image);
        return image
    }
    
    alphabet() {
        var root = this.getRootCardElement();
        this.setImagePath(root, "img/sheet/alphabet-front.png", "backside");
        this.setImagePath(root, "img/sheet/alphabet-back.png", "frontside");
        return new Card(root, this.equivalenceId);
    }
}


function scaleAllCardsOnTheTable(pixels) {
    var sheet = document.getElementById("card-scale-sheet");
    if (!sheet) {
        // see https://www.w3.org/wiki/Dynamic_style_-_manipulating_CSS_with_JavaScript
        sheet = document.createElement("style");
        sheet.id = "card-scale-sheet";
        document.head.appendChild(sheet);
    }
    var margin = Math.round(0.1 * pixels);
    var css = "/* dynamic scaling */" + 
        ".card { width: " + pixels + "px; height: " + pixels + "px; margin: " + margin + "px } \n" + 
        ".card img { top: -" + margin + "px; left: -" + margin + "px; }\n";
    for (var i = 1; i < 5; i++) {
        css += ".card.line" + i + " { font-size: " + Math.round(0.8 * pixels / i) + "px; line-height: " + Math.round(1 * pixels / i) + "px } \n";
    }
    sheet.innerHTML = css;
    //console.log(css);
}