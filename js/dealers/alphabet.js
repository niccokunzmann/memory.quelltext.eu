/*
 * This dealer maps upper case letters to lower case letters.
 */
class AlphabetDealer {
    
    getLetters() {
        var letters = [];
        for (var i = "a"; i <= "z"; i = String.fromCharCode(i.charCodeAt(0) + 1)) {
            letters.push(i);
        }
        return letters;
    }
    
    prepare(table, numberOfCards) {
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
    
    getImagePath() {
        return "img/settings/alphabet.png";
    }
    
    getDescription() {
        return "Buchstaben klein und GROß";
    }
}