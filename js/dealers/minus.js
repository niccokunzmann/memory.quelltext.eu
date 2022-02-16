/*
 * This dealer gives out cards with - computation.
 */

var MinusCalculation = {
  chooseCardFrom: function(cardFactory) {
    return cardFactory.boxOfFruit();
  },
  operandString: "-",
  calculate: function (a, b) {
    return a > b ? a - b : null;    
  }
};

var newMinusDealer = function(minNumber, maxNumber, maxValue, description, file) {
        return new MathDealer(minNumber, maxNumber, maxValue, description, file, MinusCalculation);
    }
