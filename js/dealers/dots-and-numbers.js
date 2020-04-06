/* Put cards with dots and numbers on the table.
 */
class DotsAndNumbersDealer {
    
    constructor(start, stop, description) {
        this.start = start;
        this.stop = stop;
        this.description = description;
    }
    
    getPairs() { 
        var pairs = [
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
                text: "3",
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
        pairs.forEach(function(pair, index) {
            pair.forEach(function(element){
                element.equivalenceId = "" + index;
                element.value = index;
            });
        });
        return pairs;
    };
    
    prepare(table, numberOfCards) {
        var pairs = [];
        while (numberOfCards > 0) {
            if (!pairs.length) {
                pairs = this.getPairs();
            }
            var pair = pairs.pop(Math.floor(Math.random() * pairs.length));
            if (pair[0].value < this.start || pair[0].value > this.stop) {
                continue;
            }
            pair.forEach(function (element) {
                var card = new CardFactory(element.equivalenceId, element.text, element.classList).sheetOfPaper();
                table.addCard(card);
                numberOfCards--;
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
