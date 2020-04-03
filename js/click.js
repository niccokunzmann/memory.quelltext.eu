
var lastClicked = [];

function getCardValue(aCard) {
    return aCard.getAttribute("value");
}

function showCard(aCard) {
    aCard.classList.add("visible");
}

function hideCard(aCard) {
    aCard.classList.remove("visible");
}

function clickCard(aCard) {
    if (lastClicked.includes(aCard) || aCard.classList.contains("paired")) {
        return;
    }
    console.log("click: " + getCardValue(aCard));
    showCard(aCard);
    if (lastClicked.length == 2) {
        hideCard(lastClicked[0]);
        hideCard(lastClicked[1]);
        lastClicked = [];
    } else if (lastClicked.length == 1) {
        if (getCardValue(lastClicked[0]) == getCardValue(aCard)) {
            lastClicked[0].classList.add("paired");
            aCard.classList.add("paired");
        }
    }
    lastClicked.push(aCard);
}

window.addEventListener("load", function() {
    var children = table.children;
    shuffle(children);
    for (var i = 0; i < children.length; i++) {
        table.appendChild(children[i]);
    }
});
