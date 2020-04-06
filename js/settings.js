
class GameMode {
    
    constructor(sourceImage, numberOfCards) {
        this.sourceImage = sourceImage;
        this.numberOfCards = numberOfCards;
    }
    
    displayOnButton(img) {
        img.src = this.sourceImage;
    }
}

class Settings {
    
    modes = [
        new GameMode("img/settings/size-small.png", 6),
        new GameMode("img/settings/size-medium.png", 12),
        new GameMode("img/settings/size-big.png", 24),
    ];

    dealerNames = [
        "dotsAndNumbers1To5",
        "dotsAndNumbers0To10",
    ];
    
    constructor() {
        this.modeIndex = 0;
        this.table = new Table("table");
    }
    
    toggleSound() {
        document.body.classList.toggle("soundOff");
    }
    
    onload() {
        this.modeElement.onclick = this.changeMode.bind(this);
        this.modeChanged();
        this.loadDealers();
        this.table.hide();
        this.menu = document.getElementById("menu");
    }
    
    changeMode() {
        this.modeIndex = (this.modeIndex + 1) % this.modes.length;
        this.modeChanged();
    }

    modeChanged(){
        this.mode.displayOnButton(this.modeElement);
    }

    get mode(){
        return this.modes[this.modeIndex];
    }

    get modeElement() {
        return document.getElementById("gameMode");
    }

    loadDealers() {
        var dealerContainer = document.getElementById("dealerContainer");
        var me = this;
        this.dealerNames.forEach(function(id) {
            var dealer = dealers[id]();
            var element = me.dealerToHTML(id, dealer);
            element.addEventListener("click", function() {
                console.log("dealer chosen: " + id);
                me.dealerChosen(dealer);
            });
            dealerContainer.appendChild(element);
        });
    }

    dealerToHTML(id, dealer) {
        var root = document.createElement("div");
        root.classList.add("dealer");
        root.classList.add("noselect");
        root.id = id;
        
        var img = document.createElement("img");
        img.src = dealer.getImagePath();
        root.appendChild(img);
        
        var description = document.createElement("div");
        description.innerHTML = dealer.getDescription();
        description.classList.add("description");
        root.appendChild(description);
        return root;
    }

    dealerChosen(dealer) {
        this.table.show();
        this.menu.classList.add("hidden");
        game = loadAndStartTheGame(this.table, dealer, this.mode);
    }
}

var settings;
var game;

window.addEventListener("load", function() {
    settings = new Settings();
    settings.onload();
});
