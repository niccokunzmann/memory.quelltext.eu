/* The game has a state and revieves user interaction.
 */

class Game {
    constructor(table, onOver) {
        this.table = table;
        this.state = new InitialState();
        this.onOver = onOver;
    }
    
    start() {
        this.table.onCardClicked(this.cardClicked.bind(this));
        this.table.fitOnScreen();
    }
    
    cardClicked(aCard) {
        if (this.table.allCardsArePaired()) {
            this.stop();
            this.onOver();
            return;
        }
        var newState = this.state.onCardClicked(aCard);
        console.log(this.state + " + " + aCard + " => " + newState);
        this.state = newState;
        if (this.table.allCardsArePaired()) {
            this.over();
        }
    }
    
    over() {
        confetti.start(5000);
    }
    
    stop() {
        confetti.stop();
    }
}


function loadAndStartTheGame(table, dealer, mode, onOver) {
    table.clean();
    setTableBackground();
    startPreload();
    dealer.prepare(table, mode.numberOfCards);
    table.shuffleCards();
    var game = new Game(table, onOver);
    game.start();
    return game;
}
