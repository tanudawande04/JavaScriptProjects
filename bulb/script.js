

document.getElementById("img").src="bulbof.png";

function btnOn(){
    document.getElementById("img").src="bulbon.png"
    document.getElementById("text").innerHTML = " BULB ON"
    document.getElementById("button-on").style.backgroundColor = "yellow"
    document.getElementById("button-on").style.color = "white"
     document.getElementById("button-off").style.backgroundcolor = "white"
    document.getElementById("button-off").style.color = "black"

}

function btnOff(){
    document.getElementById("img").src="bulbof.png"
    document.getElementById("text").innerHTML = " BULB OFF"
    document.getElementById("button-off").style.backgroundcolor = "yellow"
    document.getElementById("button-off").style.color = "black"
    document.getElementById("button-on").style.backgroundColor = "white"
    document.getElementById("button-on").style.color = "black"
}