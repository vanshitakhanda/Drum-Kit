// alert("working");

//  document.querySelector("button").addEventListener("click",handleClick);


// function handleClick(){
//     alert("i got clicked");
// }
for(var i=0; i<document.querySelectorAll(".drum").length;i++)
document.querySelectorAll(".drum")[i].addEventListener("click", function(){
    // alert("i got clicked");
    var audio = new Audio("sounds/tom-1.mp3");
    audio.play();


});

