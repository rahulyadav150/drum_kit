len=document.querySelectorAll(".drum").length;
for(var i=0;i<len;i++)
{document.querySelectorAll(".drum")[i].addEventListener("click",function(e){
 console.log(e);
    var char=this.innerHTML;
    addanimation(char);
  switch(char){
    case 'w':
          var audio=new Audio("sounds/tom-1.mp3");
          audio.play();
          break;
    case 'a':
        var audio=new Audio("sounds/tom-2.mp3");
        audio.play();
        break;
    case 's':
        var audio=new Audio("sounds/tom-3.mp3");
        audio.play();
        break;
    case 'd':
        var audio=new Audio("sounds/tom-4.mp3");
        audio.play();
        break;
    case 'j':
        var audio=new Audio("sounds/s2.mp3");
        audio.play();
        break;
    case 'k':
        var audio=new Audio("sounds/s1.mp3");
        audio.play();
        break;
    case 'l':
        var audio=new Audio("sounds/s0.mp3");
        audio.play();
        break;
    default:
        console.log("wrong input");
        
  }
});
}
  document.addEventListener("keydown",function(f){
    var char=f.key;
    
    switch(char){
      case 'w':
            var audio=new Audio("sounds/tom-1.mp3");
            audio.play();
            break;
      case 'a':
          var audio=new Audio("sounds/tom-2.mp3");
          audio.play();
          break;
      case 's':
          var audio=new Audio("sounds/tom-3.mp3");
          audio.play();
          break;
      case 'd':
          var audio=new Audio("sounds/tom-4.mp3");
          audio.play();
          break;
      case 'j':
          var audio=new Audio("sounds/s2.mp3");
          audio.play();
          break;
      case 'k':
          var audio=new Audio("sounds/s1.mp3");
          audio.play();
          break;
      case 'l':
          var audio=new Audio("sounds/s0.mp3");
          audio.play();
          break;
      default:
          console.log("wrong input");
    
  }
  addanimation(char);
});
function addanimation(key)
{
    var activeButton=document.querySelector("."+key);
    activeButton.classList.add("pressed");
    setTimeout(function(){
    activeButton.classList.remove("pressed");
    },100);

}

