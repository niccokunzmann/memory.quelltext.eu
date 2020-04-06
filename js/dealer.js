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
    }
}
