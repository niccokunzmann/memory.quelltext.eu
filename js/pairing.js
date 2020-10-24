/**
 * These objects describe different strategies for pairing the cards.
 */

function PairWithSameValue(value) {
    this.value = value;
}

PairWithSameValue.prototype.isPair = function(other) {
    return this.value == other.value;
}

function PairOfDifferentKind(value, kind) {
    this.value = value;
    this.kind = kind;
}

PairOfDifferentKind.prototype.isPair = function(other) {
    return this.value == other.value && this.kind != other.kind;
}

