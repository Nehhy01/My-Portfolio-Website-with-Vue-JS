// $("h1").css("color", "green");

var title = $("h1");
var btn = $("button");

// title.on("mouseover", function() {
//     title.css("color", "purple")
// })

title.mouseover(function() {
    title.css("color", "rgb(20, 200, 20)")
}) 

title.before("<button>Move</button>");
btn.on("click", function() {
    title.slideToggle();
})