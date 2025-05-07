var btn = document.querySelectorAll(".drum");

for (let i = 0; i < btn.length; i++) {

    btn[i].addEventListener("click", function() {
        var buttonLetter = this.innerHTML;
        makeAnimation(buttonLetter);
        switcher(buttonLetter);
    })

    btn[i].addEventListener("keydown", function(event) {
        switcher(event.key);
        makeAnimation(event.key);
    })
}


function switcher(buttonLetter) {
    switch (buttonLetter) {
        case "w":
            var tom = new Audio("./sounds/tom-1.mp3");
            tom.play();
            break;

        case "a":
            var tom1 = new Audio("./sounds/tom-2.mp3");
            tom1.play();
            break;

        case "s":
            var tom2 = new Audio("./sounds/tom-3.mp3");
            tom2.play();
            break;

        case "d":
            var tom3 = new Audio("./sounds/tom-4.mp3");
            tom3.play();
            break;

        case "j":
            var snare = new Audio("./sounds/snare.mp3");
            snare.play();
            break;

        case "k":
            var crash = new Audio("./sounds/crash.mp3");
            crash.play();
            break;

        case "l":
            var kick = new Audio("./sounds/kick-bass.mp3");
            kick.play();
            break;

        default: console.log("not valid")
    }
}

function makeAnimation(key) {
   var activeButton = document.querySelector("." + key);
   activeButton.classList.add("pressed");

   setTimeout(() => {
    activeButton.classList.remove("pressed");
   }, 100)
}