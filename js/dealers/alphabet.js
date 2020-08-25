/*
 * This dealer maps upper case letters to lower case letters.
 */
var AlphabetDealer = function() {}
    
AlphabetDealer.prototype.getLetters = function() {
        var letters = [];
        for (var i = "a"; i <= "z"; i = String.fromCharCode(i.charCodeAt(0) + 1)) {
            letters.push(i);
        }
        return letters;
    }
    
AlphabetDealer.prototype.prepare = function(table, numberOfCards) {
        var letters = [];
        while (numberOfCards > 0) {
            if (!letters.length) {
                letters = this.getLetters();
            }
            var letter = removeRandomElementFrom(letters);
            table.addCard(new CardFactory(letter, letter.toLowerCase(), ["line1"]).alphabet());
            table.addCard(new CardFactory(letter, letter.toUpperCase(), ["line1"]).alphabet());
            numberOfCards -= 2;
        }
    }
    
AlphabetDealer.prototype.getImagePath = function() {
        return "img/settings/alphabet.png";
    }
    
AlphabetDealer.prototype.getDescription = function() {
        return "a-z & A-Z";
    }
