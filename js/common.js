/**
 * Shuffles array in place.
 * @param {Array} a items An array containing the items.
 */
function shuffle(a) {
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
    }
    return a;
}

function removeRandomElementFrom(anArray) {
    var index = Math.floor(Math.random() * anArray.length);
    // see https://stackoverflow.com/a/5767357/1320237
    var element = anArray[index];
    anArray.splice(index, 1);
    return element;
}
