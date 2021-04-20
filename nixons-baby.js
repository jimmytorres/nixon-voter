const bb = document.getElementById("badButton");
const gg = document.getElementById("goodButton");
const body = document.body;


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

function negate(){
    alert("uh oh loser alert lets not do that");
    document.getElementById("papa").src = "vishawn.jpeg";
    document.getElementById("goodButton").innerHTML = "How about now ;)";
};

bb.addEventListener('click', negate);

    
var i = 0;
var txt = "Don't come for the Nixon pal....or else."; /* The text */
var speed = 100; /* The speed/duration of the effect in milliseconds */

function disObey(){
    body.style.backgroundColor = "black";
    body.style.color = "white";
    document.getElementById("papa").style.display = 'none';
    document.getElementById("villain").style.display = 'none';
    document.getElementById("fadeIn").style.display = 'none';
    bb.style.display = 'none';
    gg.style.display = 'none';
    
    if (i < txt.length) {
        document.getElementById("demo").innerHTML += txt.charAt(i);
        i++;
        setTimeout(disObey, speed);
    }

};

gg.addEventListener('contextmenu', disObey);


//Using the clientX & clientY properties
