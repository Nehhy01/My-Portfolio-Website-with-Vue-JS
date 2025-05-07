var title = document.querySelector("h1");
var img1 = document.querySelectorAll(".dice img")[0];
var img2 = document.querySelectorAll(".dice img")[1];

var n = Math.floor((Math.random()*6)) +1;
var m = Math.floor((Math.random()*6)) +1;
var src = `/images/dice${n}.png`;

img1.setAttribute("src", `/images/dice${n}.png`)
img2.setAttribute("src", `/images/dice${m}.png`)


if(n>m) {
    title.innerHTML= "🎲Player 1 WINS";
} else if(m>n) {
    title.innerHTML= "Player 2 WINS🎲"
} else{
    title.innerHTML= "Draw!"
};
