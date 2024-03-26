for(var i = 0 ; i < 7 ; i++){
   document.querySelectorAll("button")[i].addEventListener('click' , function(){
    var btnInput = this.innerHTML;    
    trigeredFunction(btnInput);
    buttonAnimation(btnInput);
   });

   document.addEventListener("keydown" , function(e){
   trigeredFunction(e.key);
   buttonAnimation(e.key);
});
   function trigeredFunction(event){
    switch (event) {
        case "s":
            var audio = new Audio("sounds/tom-1.mp3");
            audio.play();
            break;
        case "d":
            var audio = new Audio("sounds/tom-2.mp3");
            audio.play();
            break;
        case "f":
            var audio = new Audio("sounds/tom-3.mp3");
            audio.play();
            break;
        case "g":
            var audio = new Audio("sounds/tom-4.mp3");
            audio.play();
            break;
        case "h":
            var audio = new Audio("sounds/crash.mp3");
            audio.play();
            break;
        case "j":
            var audio = new Audio("sounds/snare.mp3");
            audio.play();
            break;
        case "k":
            var audio = new Audio("sounds/kick-bass.mp3");
            audio.play();
            break;
    }
  }
  function buttonAnimation(btn){
    document.querySelector("." + btn).classList.add("pressed");
    setTimeout(function(){
        document.querySelector("." + btn).classList.remove("pressed");
    } , 100)
  }
}