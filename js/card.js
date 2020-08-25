/*
 * The user interacts with the card.
 *
 * The card has an HTML element to interact with the user.
 */


var Card = function(element, equivalenceId) {
        this.equivalenceId = equivalenceId;
        this.cardListeners = [];
        this.element = element;
        this.element.addEventListener("click", this.cardClicked.bind(this));
    }
    
Card.prototype.cardClicked = function() {
        var aCard = this;
        this.cardListeners.forEach(function (listener) {
            listener(aCard);
        });
    }
    
Card.prototype.onCardClicked = function(func) {
        this.cardListeners.push(func);
    }
    
Card.prototype.value = function() {
        return this.equivalenceId;
    }
    
Card.prototype.show = function() {
        this.element.classList.add("visible");
    }
    
Card.prototype.hide = function() {
        this.element.classList.remove("visible");
    }
    
Card.prototype.pair = function() {
        this.element.classList.add("paired");
        this.element.classList.remove("visible");
    }
    
Card.prototype.isPaired = function() {
        return this.element.classList.contains("paired");
    }
    
Card.prototype.toString = function() {
            return "Card(" + this.value() + (this.isPaired() ? ", paired" : "") + ")";
    }
    
Card.prototype.asHTMLElement = function() {
        return this.element;
    }


var CardFactory = function(equivalenceId, html, classList) {
        this.equivalenceId = equivalenceId;
        this.html = html;
        this.classList = classList;
    }
    
CardFactory.prototype.getRootCardElement = function() {
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
    
CardFactory.prototype.sheetOfPaper = function() {
        var root = this.getRootCardElement();
        setPaperBackgroundOf(root);
        return new Card(root, this.equivalenceId);
    }
    
CardFactory.prototype.setImagePath = function(root, path, cls) {
        var image = document.createElement("img");
        image.src = path;
        image.classList.add(cls);
        root.appendChild(image);
        return image
    }
    
CardFactory.prototype.alphabet = function() {
        return this.frontAndBack("img/sheet/alphabet-front.png", "img/sheet/alphabet-back.png");
    }
    
CardFactory.prototype.plus = function() {
        return this.frontAndBack(removeRandomElementFrom([
            "img/sheet/plus-blue.png",
            "img/sheet/plus-orange.png",
            "img/sheet/plus-green.png",
            "img/sheet/plus-red.png",
            "img/sheet/plus-lightblue.png",
            "img/sheet/plus-yellow.png",
        ]), "img/sheet/plus-front.png");
    }
    
CardFactory.prototype.frontAndBack = function(frontImagePath, backImagePath) {
        var root = this.getRootCardElement();
        this.setImagePath(root, frontImagePath, "backside");
        this.setImagePath(root, backImagePath, "frontside");
        return new Card(root, this.equivalenceId);
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