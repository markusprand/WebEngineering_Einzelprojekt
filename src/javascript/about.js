let initAbout = function() {
    let elem = document.createElement("img");
    elem.setAttribute("src", "https://media1.tenor.com/images/4324d537dbc06f422b34ae131c7b3e14/tenor.gif?itemid=7755460");
    elem.setAttribute("height", "768");
    elem.setAttribute("width", "1024");
    elem.setAttribute("alt", "Best man");
    document.getElementById("image-placeholder").appendChild(elem);
    
}

initAbout();
