/*
 * This dealer gives out cards with + computation.
 */

var PlusCalculation = {
  chooseCardFrom: function(cardFactory) {
    return cardFactory.plus();
  },
  operandString: "+",
  calculate: function (a, b) {
    return a + b;    
  }
};

var newPlusDealer = function(minNumber, maxNumber, maxValue, description, file) {
        return new MathDealer(minNumber, maxNumber, maxValue, description, file, PlusCalculation);
    }
