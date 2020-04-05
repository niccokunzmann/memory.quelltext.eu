/*
 * The dealer places the cards on the table.
 */

/* Put cards with dots and numbers on the table.
 */
class DotsAndNumbersDealer {
    
    pairs = {
        "0": [{
                text: "0",
                classList: ["line1"]
            }, {
                text: "&nbsp;",
                classList: ["line1"]
            }],
        "1": [{
                text: "1",
                classList: ["line1"]
            }, {
                text: "&bull;",
                classList: ["line1"]
            }],
        "2": [{
                text: "2",
                classList: ["line1"]
            }, {
                text: "&bull;&bull;",
                classList: ["line1"]
            }],
        "3": [{
                text: "2",
                classList: ["line1"]
            }, {
                text: "&bull;&bull;<br/>&bull;",
                classList: ["line2"]
            }],
        "4": [{
                text: "4",
                classList: ["line1"]
            }, {
                text: "&bull;&bull;<br/>&bull;&bull;",
                classList: ["line2"]
            }],
        "5": [{
                text: "5",
                classList: ["line1"]
            }, {
                text: "&bull;&bull;<br/>&bull;&bull;&bull;",
                classList: ["line2"]
            }],
        "6": [{
                text: "6",
                classList: ["line1"]
            }, {
                text: "&bull;&bull;&bull;<br/>&bull;&bull;&bull;",
                classList: ["line2"]
            }],
        "7": [{
                text: "7",
                classList: ["line1"]
            }, {
                text: "&bull;&bull;&bull;<br/>&bull;&bull;<br/>&bull;&bull;",
                classList: ["line3"]
            }],
        "8": [{
                text: "8",
                classList: ["line1"]
            }, {
                text: "&bull;&bull;&bull;<br/>&bull;&bull;&bull;<br/>&bull;&bull;",
                classList: ["line3"]
            }],
        "9": [{
                text: "9",
                classList: ["line1"]
            }, {
                text: "&bull;&bull;&bull;<br/>&bull;&bull;&bull;<br/>&bull;&bull;&bull;",
                classList: ["line3"]
            }],
        "10": [{
                text: "10",
                classList: ["line1"]
            }, {
                text: "&bull;&bull;&bull;<br/>&bull;&bull;&bull;<br/>&bull;&bull;&bull;&bull;",
                classList: ["line3"]
            }]
    };
    
    prepare(table) {
        for (var equivalenceId in this.pairs) {
            var pair = this.pairs[equivalenceId];
            pair.forEach(function (element) {
                var card = Card.newSheetOfPaper(equivalenceId, element.text, element.classList);
                table.addCard(card);
            });
        }
    }
}


var dealers;
dealers = dealers || {};
dealers.dotsAndNumbers = DotsAndNumbersDealer;