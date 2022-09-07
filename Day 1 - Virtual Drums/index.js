document.addEventListener("keydown", function (e) {
    
    var pressed = e.key;
    
    switch (e.key) {

        case "a": var clap = new Audio("sounds/clap.wav");
                 clap.play();
                 document.querySelectorAll(".key")[0].classList.add("playing");
                 setTimeout(function(){
                 document.querySelectorAll(".key")[0].classList.remove("playing");
                 }, 100);
                 
        break;

        case "s": var hihat = new Audio("sounds/hihat.wav");
                 hihat.play();
                 document.querySelectorAll(".key")[1].classList.add("playing");
                 setTimeout(function(){
                 document.querySelectorAll(".key")[1].classList.remove("playing");
                 }, 100);
        break;

        case "d": var kick = new Audio("sounds/kick.wav");
                 kick.play();
                 document.querySelectorAll(".key")[2].classList.add("playing");
                 setTimeout(function(){
                 document.querySelectorAll(".key")[2].classList.remove("playing");
                 }, 100);
                
        break;

        case "f": var openHat = new Audio("sounds/openhat.wav");
                 openHat.play();
                 document.querySelectorAll(".key")[3].classList.add("playing");
                 setTimeout(function(){
                 document.querySelectorAll(".key")[3].classList.remove("playing");
                 }, 100);
        break;

        case "g": var boom = new Audio("sounds/boom.wav");
                 boom.play();
                 document.querySelectorAll(".key")[4].classList.add("playing");
                 setTimeout(function(){
                 document.querySelectorAll(".key")[4].classList.remove("playing");
                 }, 100);
        break;

        case "h": var ride = new Audio("sounds/ride.wav");
                 ride.play();
                 document.querySelectorAll(".key")[5].classList.add("playing");
                 setTimeout(function(){
                 document.querySelectorAll(".key")[5].classList.remove("playing");
                 }, 100);
        break;
    
        case "j": var snare = new Audio("sounds/snare.wav");
                 snare.play();
                 document.querySelectorAll(".key")[6].classList.add("playing");
                 setTimeout(function(){
                 document.querySelectorAll(".key")[6].classList.remove("playing");
                 }, 100);
        break;
    
        case "k": var tom = new Audio("sounds/tom.wav");
                 tom.play();
                 document.querySelectorAll(".key")[7].classList.add("playing");
                 setTimeout(function(){
                 document.querySelectorAll(".key")[7].classList.remove("playing");
                 }, 100);
        break;
    
        case "l": var tink = new Audio("sounds/tink.wav");
                 tink.play();
                 document.querySelectorAll(".key")[8].classList.add("playing");
                 setTimeout(function(){
                 document.querySelectorAll(".key")[8].classList.remove("playing");
                 }, 100);
        break;


    }
    
})