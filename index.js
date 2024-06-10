// adding buttons to all
var len=document.querySelectorAll(".drum").length;
for(var i=0;i<len;i++)
    {
        document.querySelectorAll(".drum")[i].addEventListener("click",function(){
        this.style.color="white";
        var buttonInnerHtml=this.innerHTML;
        makeSound(buttonInnerHtml);
        animate(buttonInnerHtml);
    });
}
document.addEventListener("keypress",function(event)
{
   document.querySelector("."+event.key).style.color="white";
    makeSound(event.key);
    animate(event.key);
})
    function makeSound(key)
    {
        switch (key) {
            case "w":
                var audio=new Audio("sounds/tom-4.mp3");
                audio.play();
                break;
            case "a":
                var audio=new Audio("sounds/tom-3.mp3");
                audio.play();
                break;
            case "s":
                var audio=new Audio("sounds/tom-2.mp3");
                audio.play();
                break;
            case "d":
                var audio=new Audio("sounds/tom-1.mp3");
                audio.play();
                break;
            case "j":
                var audio=new Audio("sounds/crash.mp3");
                audio.play();
                break;
            case "k":
                var audio=new Audio("sounds/kick-bass.mp3");
                audio.play();
                break;
            case "l":
                var audio=new Audio("sounds/snare.mp3");
                audio.play();
                break;
        
            default:
                alert("try refreshing...")
        }
    }
    function animate(currentkey)
    {
        var activebutton=document.querySelector("."+currentkey);
        activebutton.classList.add("pressed");
        setTimeout(function (){
            activebutton.classList.remove("pressed");
            activebutton.style.color="";
        },200);
    }
    