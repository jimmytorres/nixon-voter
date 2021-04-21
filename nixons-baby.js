const bb = document.getElementById("badButton");
const gg = document.getElementById("goodButton");
const body = document.body;

// 2) Use an onload listener
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

// 4) Use onclick listener
function negate(){
    alert("uh oh loser alert lets not do that");
    document.getElementById("papa").src = "vishawn.jpeg";
    gg.innerHTML = "How about now ;)";
};

bb.addEventListener('click', negate);

// 5) Use context menu event     
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
}


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


// 8) Using "this" for onclick events

