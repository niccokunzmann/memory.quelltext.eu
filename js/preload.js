
window.addEventListener("load", function() {
    var children = table.children;
    shuffle(children);
    for (var i = 0; i < children.length; i++) {
        table.appendChild(children[i]);
    }
    setTimeout(function() {
    document.body.classList.remove("preload");
}, 1000);
});


