/*
 * This dealer gives out cards with + computation.
 */
class PlusDealer {
    
    constructor(minNumber, maxNumber, maxValue, description, file) {
        this.minNumber = minNumber;
        this.maxNumber = maxNumber;
        this.maxValue = maxValue;
        this.description = description;
        this.file = file;
    }
    
    getNumber() {
        return Math.floor(this.minNumber + (this.maxNumber + 1 - this.minNumber) * Math.random());
    }
    
    prepare(table, numberOfCards) {
        var letters = [];
        while (numberOfCards > 0) {
            var number1 = this.getNumber();
            var number2 = this.getNumber();
            if (number1 + number2 <= this.maxValue){
                var value = number1 + number2 + "";
                table.addCard(new CardFactory(value, number1 + "<br/>+<br/>" + number2, ["line3"]).plus());
                table.addCard(new CardFactory(value, value, ["line1"]).plus());
                numberOfCards -= 2;
            }
        }
    }
    
    getImagePath() {
        return "img/settings/" + this.file;
    }
    
    getDescription() {
        return this.description;
    }
}