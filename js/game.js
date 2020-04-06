/* The game has a state and revieves user interaction.
 */

class Game {
    constructor(table) {
        this.table = table;
        this.state = new InitialState();
    }
    
    start() {
        this.table.onCardClicked(this.cardClicked.bind(this));
        this.table.fitOnScreen();
    }
    
    cardClicked(aCard) {
        var newState = this.state.onCardClicked(aCard);
        console.log(this.state + " + " + aCard + " => " + newState);
        this.state = newState;
    }
}


function loadAndStartTheGame(table, dealer, mode) {
    table.clean();
    setTableBackground();
    startPreload();
    dealer.prepare(table, mode.numberOfCards);
    table.shuffleCards();
    var game = new Game(table);
    game.start();
    return game;
}
