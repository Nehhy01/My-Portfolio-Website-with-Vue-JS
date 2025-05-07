var image = $(".container");
var second = $(".second");
let isImage1 = true;
// setInterval(() => {
//     var imageRandom = Math.round(Math.random() * 1);
//     image.addEventListener("click", () => {})
//     image.style.backgroundImage = `url(./img/${imageRandom}.jpg)`;
// }, 1000) 
 

image.on("mouseenter", function() {
    second.addClass("scale");
    if(isImage1) {
        second.attr("src", "./img/0.jpg")
    }
    else {
        second.attr("src", "./img/1.jpg")
    }   
    isImage1 = !isImage1;
});

image.on("mouseleave", function() {
    second.removeClass("scale");
});

