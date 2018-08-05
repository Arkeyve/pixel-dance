pixelSize = 10;

window.addEventListener("load", function() {
    for(var i = 0; i < (window.innerHeight / pixelSize); i++) {
        for(var j = 0; j < (window.innerWidth / pixelSize); j++) {
            var div = document.createElement("div");
            div.style.top = (i * pixelSize) + "px";
            div.style.left = (j * pixelSize) + "px";

            var r = Math.floor(Math.random() * 255);
            var g = Math.floor(Math.random() * 255);
            var b = Math.floor(Math.random() * 255);
            var a = Math.floor(Math.random() * 255);

            div.style.backgroundColor = "rgba(" + r + ", " + g + ", " + b + ", " + a + ")";

            document.body.appendChild(div);
        }
    }

    var divs = document.getElementsByTagName("div");

    for(var i = 0; i < 2; i++) {
        setInterval(function() {
            var divId = Math.floor(Math.random() * divs.length);

            var r = Math.floor(Math.random() * 255);
            var g = Math.floor(Math.random() * 255);
            var b = Math.floor(Math.random() * 255);
            var a = Math.floor(Math.random() * 255);

            divs[divId].style.backgroundColor = "rgba(" + r + ", " + g + ", " + b + ", " + a + ")";
        }, 1);
    }

    for(var i = 0; i < 18; i++) {
        setInterval(function() {
            var divId = Math.floor(Math.random() * divs.length);

            var b = Math.floor(Math.random() * 255);

            divs[divId].style.backgroundColor = "rgba(" + b + ", " + b + ", " + b + ", " + b + ")";
        }, 1);
    }
});
