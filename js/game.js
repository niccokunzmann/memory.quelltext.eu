/* The game has a state and revieves user interaction.
 */

class Game {
    constructor(table) {
        this.table = table;
        this.state = new InitialState();
    }
    
    start() {
        this.table.onCardClicked(this.cardClicked.bind(this));
    }
    
    cardClicked(aCard) {
        var newState = this.state.onCardClicked(aCard);
        console.log(this.state + " + " + aCard + " => " + newState);
        this.state = newState;
    }
}


function loadAndStartTheGame(tableElementId) {
    var tableElement = document.getElementById(tableElementId);
    var table = new Table(tableElement);
    var dealer = new dealers.dotsAndNumbers();
    dealer.prepare(table);
    var game = new Game(table);
    game.start();
    return game;
}
