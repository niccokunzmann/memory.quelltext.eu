/*
 * This dealer gives out cards with mathematical computation.
 */

var MathDealer = function(minNumber, maxNumber, maxValue, description, file, calculationSrategy) {
        this.minNumber = minNumber;
        this.maxNumber = maxNumber;
        this.maxValue = maxValue;
        this.description = description;
        this.file = file;
        this.calculationSrategy = calculationSrategy;
    }
    
MathDealer.prototype.getNumber = function() {
        return Math.floor(this.minNumber + (this.maxNumber + 1 - this.minNumber) * Math.random());
    }
    
MathDealer.prototype.prepare = function(table, numberOfCards) {
        var letters = [];
        while (numberOfCards > 0) {
            var number1 = this.getNumber();
            var number2 = this.getNumber();
            var numericValue = this.calculationSrategy.calculate(number1, number2);
            if (numericValue != null && numericValue <= this.maxValue){
                var value = numericValue + "";
                table.addCard(this.calculationSrategy.chooseCardFrom(
                    new CardFactory(
                      new PairOfDifferentKind(value, "task"),
                      number1 + "<br/>" + this.calculationSrategy.operandString + "<br/>" + number2, ["line3"])));
                table.addCard(this.calculationSrategy.chooseCardFrom(
                    new CardFactory(
                      new PairOfDifferentKind(value, "result"),
                      value, ["line1"])));
                numberOfCards -= 2;
            }
        }
    }
    
MathDealer.prototype.getImagePath = function() {
        return "img/settings/" + this.file;
    }
    
MathDealer.prototype.getDescription = function() {
        return this.description;
    }
