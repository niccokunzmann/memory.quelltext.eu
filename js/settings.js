
var GameMode = function(sourceImage, numberOfCards) {
        this.sourceImage = sourceImage;
        this.numberOfCards = numberOfCards;
    }
    
GameMode.prototype.displayOnButton = function(img) {
        img.src = this.sourceImage;
    }


var Settings = function() {
       this.modeIndex = 0;
       this.table = this.newTable();
   }
    
Settings.prototype.modes = function() {
        return [
            new GameMode("img/settings/size-small.png", 6),
            new GameMode("img/settings/size-medium.png", 12),
            new GameMode("img/settings/size-big.png", 24),
        ];
    };

Settings.prototype.newTable = function() {
        return new Table("table");
    }
    
Settings.prototype.toggleSound = function() {
        document.body.classList.toggle("soundOff");
    }
    
Settings.prototype.onload = function() {
        this.modeElement().onclick = this.changeMode.bind(this);
        this.modeChanged();
        this.loadDealers();
        this.table.hide();
        this.menu = document.getElementById("menu");
    }
    
Settings.prototype.changeMode = function() {
        this.modeIndex = (this.modeIndex + 1) % this.modes().length;
        this.modeChanged();
    }

Settings.prototype.modeChanged = function(){
        this.mode().displayOnButton(this.modeElement());
    }

Settings.prototype.mode = function(){
        return this.modes()[this.modeIndex];
    }

Settings.prototype.modeElement = function() {
        return document.getElementById("gameMode");
    }

Settings.prototype.loadDealers = function() {
        var dealerContainer = document.getElementById("dealerContainer");
        for (var id in dealers) {
            var dealer = dealers[id]();
            var element = this.dealerToHTML(id, dealer);
            this.addOnClickListener(element, id, dealer);
            dealerContainer.appendChild(element);
        };
    }

Settings.prototype.addOnClickListener = function(element, id, dealer) {
        element.addEventListener("click", function() {
            console.log("dealer chosen: " + id);
            this.dealerChosen(dealer);
        }.bind(this));
    }

Settings.prototype.dealerToHTML = function(id, dealer) {
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

Settings.prototype.dealerChosen = function(dealer) {
        this.table.show();
        this.menu.classList.add("hidden");
        game = loadAndStartTheGame(this.newTable(), dealer, this.mode(), this.onGameIsOver.bind(this));
    }

Settings.prototype.onGameIsOver = function() {
        this.table.clean();
        this.table.hide();
        this.menu.classList.remove("hidden");
    }


var settings;
var game;

window.addEventListener("load", function() {
    settings = new Settings();
    settings.onload();
});
