var buttonHeight = 65;
var buttonWidth = 65;

var maxHeight = window.innerHeight - buttonHeight;
var maxWidth = window.innerWidth - buttonWidth;

const a = document.getElementById("reject");
const b = document.getElementById("accept");
const c = document.getElementById("heading");

a.addEventListener("mouseover", function(){
    a.style.top = Math.floor(Math.random()*maxHeight) + "px";
    a.style.left = Math.floor(Math.random()*maxWidth) + "px";
})

b.onclick = function(){
    c.innerText= "💕 LET'S GOOOO! 💕";
}