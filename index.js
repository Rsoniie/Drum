var n=document.querySelectorAll(".drum").length;
console.log(n);

for(var i=0;i<n;i++)
{
   document.querySelectorAll(".drum")[i].addEventListener("click", function(){
   
    var butt = this.innerHTML;
    work(butt);
    animation(butt);
   });
}

document.addEventListener("keypress", function(event){

      work(event.key);
      animation(event.key);
});

function work(key)
{
    // var butt = this.innerHTML;
     switch(key)
     {
        case "w":
            var wa = new Audio("sounds/tom-1.mp3");
            wa.play();
            break;
        case "a":
            var aa=new Audio("sounds/tom-2.mp3");
            aa.play();
            break;   
        case "s":
            var sa=new Audio("sounds/tom-3.mp3");
            sa.play();
            break;
        case "d":
            var da=new Audio("sounds/tom-4.mp3");
            da.play();
            break;
        case "j":
            var ja = new Audio("sounds/kick-bass.mp3");
            ja.play();
            break; 
        case "k":
            var ka = new Audio("sounds/snare.mp3");
            ka.play();
            break;
        case "l":
            var la = new Audio("sounds/crash.mp3");
            la.play();
            break; 
        default:
            console.log(butt);
            break; 
     }
}
function animation(currentKey)
{
    var activebutton = document.querySelector("."+currentKey);
    activebutton.classList.add("pressed");
    setTimeout(function()
    {
        activebutton.classList.remove("pressed");
    }, 100);
}



