var timer = 1000;
var score = 0;
var bug = {
    x: 0,
    y: 0
}

function resetScore(){
    score = 0;
    timer = 1000;

    var scoreField = document.getElementById("score");
    scoreField.innerHTML = "Score: "+score;
}

function resetSpeed(){
    timer = 1000;
}

function bugClicked(canvas, event){
    const rect = canvas.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    
    if((x >= (bug.x - 32) && x <= (bug.x + 32))&&(y >= (bug.y - 45) && y <= (bug.y + 45))){
        score += 100;
        timer -= 100;

        var scoreField = document.getElementById("score");
        scoreField.innerHTML = "Score: "+score;
    }
}

function start(){
    var pageCanvas = document.getElementById("canvas");
    document.body.removeChild(pageCanvas);
    var canvas = document.createElement("canvas");
    canvas.id = "canvas"
    canvas.width = 800;
    canvas.height = 450;
    document.body.appendChild(canvas);
    
    var bugImage = document.getElementById('img');
    var imgCanvas = document.getElementById('canvas');
    var context = imgCanvas.getContext('2d');

    bug.x = Math.random() * 769;
    bug.y = Math.random() * 406;
    context.drawImage(bugImage,bug.x,bug.y);
}

function main () {
	var now = Date.now();
	var delta = now - then;

    if(delta >= timer){
        start();
        then = now;
    }
	
	requestAnimationFrame(main);
}

var w = window;
requestAnimationFrame = w.requestAnimationFrame || w.webkitRequestAnimationFrame || w.msRequestAnimationFrame || w.mozRequestAnimationFrame;

var then = Date.now();
start();
main();

window.addEventListener('mousedown', function(e) {bugClicked(canvas, e)});