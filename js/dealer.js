/*
 * The dealer places the cards on the table.
 */

/* Put cards with dots and numbers on the table.
 */
class DotsAndNumbersDealer {
    
    get pairs() { 
        return [
            [{
                text: "0",
                classList: ["line1"]
            }, {
                text: "&nbsp;",
                classList: ["line1"]
            }], [{
                text: "1",
                classList: ["line1"]
            }, {
                text: "&bull;",
                classList: ["line1"]
            }], [{
                text: "2",
                classList: ["line1"]
            }, {
                text: "&bull;&bull;",
                classList: ["line1"]
            }], [{
                text: "2",
                classList: ["line1"]
            }, {
                text: "&bull;&bull;<br/>&bull;",
                classList: ["line2"]
            }], [{
                text: "4",
                classList: ["line1"]
            }, {
                text: "&bull;&bull;<br/>&bull;&bull;",
                classList: ["line2"]
            }], [{
                text: "5",
                classList: ["line1"]
            }, {
                text: "&bull;&bull;<br/>&bull;&bull;&bull;",
                classList: ["line2"]
            }], [{
                text: "6",
                classList: ["line1"]
            }, {
                text: "&bull;&bull;&bull;<br/>&bull;&bull;&bull;",
                classList: ["line2"]
            }], [{
                text: "7",
                classList: ["line1"]
            }, {
                text: "&bull;&bull;&bull;<br/>&bull;&bull;<br/>&bull;&bull;",
                classList: ["line3"]
            }], [{
                text: "8",
                classList: ["line1"]
            }, {
                text: "&bull;&bull;&bull;<br/>&bull;&bull;&bull;<br/>&bull;&bull;",
                classList: ["line3"]
            }], [{
                text: "9",
                classList: ["line1"]
            }, {
                text: "&bull;&bull;&bull;<br/>&bull;&bull;&bull;<br/>&bull;&bull;&bull;",
                classList: ["line3"]
            }], [{
                text: "10",
                classList: ["line1"]
            }, {
                text: "&bull;&bull;&bull;<br/>&bull;&bull;&bull;<br/>&bull;&bull;&bull;&bull;",
                classList: ["line3"]
            }]
       ];
    };

    constructor(start, stop, description) {
        this.start = start;
        this.stop = stop;
        this.description = description;
    }
    
    prepare(table) {
        for (var equivalenceId in this.pairs) {
            var pair = this.pairs[equivalenceId];
            pair.forEach(function (element) {
                var card = Card.newSheetOfPaper(equivalenceId, element.text, element.classList);
                table.addCard(card);
            });
        }
    }
    
    getImagePath() {
        return getRandomSheetOfPaper();
    }
    
    getDescription() {
        return this.description;
    }
}


var dealers;
dealers = dealers || {};
dealers.dotsAndNumbers1To5 = function() {
    return new DotsAndNumbersDealer(1, 5, "1-5 &bull;&bull;&bull;&bull;&bull;");
};
dealers.dotsAndNumbers0To10 = function() {
    return new DotsAndNumbersDealer(0, 10, "0-10 &bull;&bull;&bull;&bull;&bull; &bull;&bull;&bull;&bull;&bull;");
};
