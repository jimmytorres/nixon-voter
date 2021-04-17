
function first(){
    window.setTimeout(fadeIn, 1000);

}

function fadeIn(){
    document.getElementById('fadeIn').style.opacity = '1';
}

function noGo(){
    document.getElementById("badButton").innerHTML = "Wrong Button Pal";
}

function revert(){
    document.getElementById("badButton").innerHTML = "Vote McGovern";
}

function reward(){
    document.body.innerHTML = "You have ultimate drip B)";
}




