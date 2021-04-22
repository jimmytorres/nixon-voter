const bb = document.getElementById("badButton");
const gg = document.getElementById("goodButton");
const body = document.body;

let voter = {
    LoserNote: "that",
}

// 2) Use an onload listener & 11) Custom cursor
function first(){
    window.setTimeout(fadeIn, 1000);
    body.style.cursor = "pointer"
}

function fadeIn(){
    document.getElementById('fadeIn').style.opacity = '1';
}

// 3) Use mouse move listener
function noGo(){
    bb.innerHTML = "Wrong Button Pal";
}

function revert(){
    bb.innerHTML = "Vote McGovern";
}

// 4) Use onclick listener & 10) add and remove add event listener
function negate(){
    alert(`uh oh loser alert lets not do ${voter.LoserNote}`);
    document.getElementById("papa").src = "vishawn.jpeg";
    gg.innerHTML = "How about now ;)";

    erase();
};

bb.addEventListener('click', negate);

function erase(){
    bb.removeEventListener('click', negate);
};


// 5) Use context menu event     
var i = 0;
var txt = "Don't come for the Nixon pal....or else."; /* The text */
var speed = 100; /* The speed/duration of the effect in milliseconds */

function disObey(){
    body.style.backgroundColor = "black";
    body.style.color = "white";
    body.style.cursor = "default";
    document.getElementById("papa").style.display = 'none';
    document.getElementById("villain").style.display = 'none';
    document.getElementById("fadeIn").style.display = 'none';
    document.getElementById("helper").style.display = 'none';
    bb.style.display = 'none';

    if (i < txt.length) {
        document.getElementById("demo").innerHTML += txt.charAt(i);
        i++;
        setTimeout(disObey, speed);
    }

};

gg.addEventListener('contextmenu', disObey);


// 6) Use ouse over & mouse leave event listener 

 var enterEventCount = 0;
 var leaveEventCount = 0;

 gg.addEventListener('mouseenter', e => {
   enterEventCount++;
   addListItem('Vote Nixon :).');
 });

 gg.addEventListener('mouseleave', e => {
   leaveEventCount++;
   addListItem('Vote Nixon :).');
 });

 function addListItem(text) {
   // Create a new text node using the supplied text
   var newTextNode = document.createTextNode(text);
   // Create a new li element
   var newListItem = document.createElement("li");
   // Add the text node to the li element
   newListItem.appendChild(newTextNode);
   // Add the newly created list item to list
   gg.appendChild(newListItem);
 };




// 7) An object the moves around the page using clientX & clientY

body.onclick = function(event){
    var x = event.clientX;
    var y = event.clientY;


    let body = this.getBoundingClientRect();

    let coords = {
        left: event.clientX - body.left - body.clientLeft - bb.offsetWidth/2,
        top: event.clientY - body.left - body.clientLeft - bb.offsetWidth/2
    }

     bb.style.left = x + 'px';
     bb.style.top = y + 'px';

}


// 9) Use a loop to create multiple elements at once


function end(){
    let winnerNote = "Thank you for voting Nixon the Great"
        body.style.color = "white";
        body.style.backgroundColor = "black";
        body.style.cursor = "default";
        document.getElementById("papa").style.display = 'none';
        document.getElementById("villain").style.display = 'none';
        document.getElementById("fadeIn").style.display = 'none';
        document.getElementById("helper").style.display = 'none';
        document.getElementById("demo").style.display = 'none';
        bb.style.display = 'none';
        gg.style.display = 'none';
        for(let i=0; i < 10; i++){
            var finalNote = document.createElement("h1");
            finalNote.innerHTML += winnerNote;
            finalNote.style.textAlign += "center";
             body.appendChild(finalNote);
            //document.getElementById('final').appendChild(finalNote);
        };
        return finalNote;
    }

gg.addEventListener('click', end);




