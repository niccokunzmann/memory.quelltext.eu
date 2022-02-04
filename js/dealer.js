/*
 * The dealer places the cards on the table.
 */

var dealers = {
    dotsAndNumbers1To5: function() {
        return new DotsAndNumbersDealer(1, 5, "1-5 &bull;&bull;&bull;&bull;&bull;");
    },
    dotsAndNumbers0To10: function() {
        return new DotsAndNumbersDealer(0, 10, "0-10 &bull;&bull;&bull;&bull;&bull; &bull;&bull;&bull;&bull;&bull;");
    },
    alphabet: function() {
        return new AlphabetDealer();
    },
    plus5: function() {
        return newPlusDealer(1, 5, 7, "1+2+3+4+5 max 7", "plus.png");
    },
    plus20: function() {
        return newPlusDealer(0, 20, 20, "0+1+...+10 max 20", "plus2.png");
    },
    minus: function() {
        return newMinusDealer(1, 30, 20, "30-...-1 max 30", "box of fruit.jpg");
    }
}
