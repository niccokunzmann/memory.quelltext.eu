const BACKGROUND_IMAGE_FOLDER = "img/table";
const BACKGROUND_IMAGES  = [
    "24498616681_2abfa58b0a_b.jpg",
    "46480815874_8d34b861b4_b.jpg",
    "9077724657_17946ab169_b.jpg",
    "250390500_d97b38cff4_b.jpg",
    "6255423726_af614e698a_b.jpg",
    "9079876458_338cc535e0_b.jpg",
];

const CARD_IMAGES_FOLDER = "img/sheet";
const CARD_IMAGES = [
    "1-1.png",
    "1-2.png",
    "1-3.png",
    "1-4.png",
    "1-5.png",
    "1-6.png",
    "1-7.png",
];

function setTableBackground() {
    var chosenImage = BACKGROUND_IMAGES[Math.floor(Math.random() * BACKGROUND_IMAGES.length)];
    const backgroundImageString = 'url(' + BACKGROUND_IMAGE_FOLDER + "/" + chosenImage + ') no-repeat center center fixed';
    document.body.style.background = backgroundImageString;
    document.body.style.backgroundSize = "cover";
}

function setCardBackground() {
    var cards = document.getElementsByClassName("card");
    for (var i = 0; i < cards.length; i++) {
        var aCard = cards[i];
        setCardBackgroundOf(aCard);
    }
}

function setCardBackgroundOf(aCard) {
    var chosenImage = CARD_IMAGES[Math.floor(Math.random() * CARD_IMAGES.length)];
    const img = document.createElement("img");
    img.src = CARD_IMAGES_FOLDER + "/" + chosenImage;
    aCard.appendChild(img);
    
}

window.addEventListener("load", function () {
    setTableBackground();
    setCardBackground();
});
