/*
 * This dealer gives out cards with + computation.
 */

var PlusDealer = function(minNumber, maxNumber, maxValue, description, file) {
        this.minNumber = minNumber;
        this.maxNumber = maxNumber;
        this.maxValue = maxValue;
        this.description = description;
        this.file = file;
    }
    
PlusDealer.prototype.getNumber = function() {
        return Math.floor(this.minNumber + (this.maxNumber + 1 - this.minNumber) * Math.random());
    }
    
PlusDealer.prototype.prepare = function(table, numberOfCards) {
        var letters = [];
        while (numberOfCards > 0) {
            var number1 = this.getNumber();
            var number2 = this.getNumber();
            if (number1 + number2 <= this.maxValue){
                var value = number1 + number2 + "";
                table.addCard(new CardFactory(
                    new PairOfDifferentKind(value, "plus"),
                    number1 + "<br/>+<br/>" + number2, ["line3"]).plus());
                table.addCard(new CardFactory(
                    new PairOfDifferentKind(value, "result"),
                    value, ["line1"]).plus());
                numberOfCards -= 2;
            }
        }
    }
    
PlusDealer.prototype.getImagePath = function() {
        return "img/settings/" + this.file;
    }
    
PlusDealer.prototype.getDescription = function() {
        return this.description;
    }
