const header = document.querySelector("header");

window.addEventListener ("scroll", function() {
    header.classList.toggle ("sticky", window.scrollY > 120);
});

let count = 1;
document.getElementById("radio1").checked = true;

setInterval( function(){
nextImage();
}, 5000)