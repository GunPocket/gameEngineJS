var delta = 0;
var lastFrameTimeMs = 0;
var fps = 60;
var timeStep = 1000 / fps;

var canvas, canvasContext;
var canvasWidth = 800;
var canvasHeight = 600;
var canvasColor = 'black'

var mouseX;
var mouseY;

function mainLoop(timeStamp) {
    if (timeStamp < lastFrameTimeMs + timeStep) {
        requestAnimationFrame(mainLoop);
        return;
    }
    delta += timeStamp - lastFrameTimeMs;
    lastFrameTimeMs = timeStamp;
    while (delta >= timeStep) {
        update(timeStep);
        delta -= timeStep;
    }
    colorRect(0, 0, canvas.width, canvas.height, canvasColor);
    render();
    requestAnimationFrame(mainLoop);
}

//runs when the window is loaded
window.onload = function () {
    canvas = document.createElement("canvas");
    canvas.id = 'gameCanvas';
    canvas.width = canvasWidth;
    canvas.height = canvasHeight;
    document.body.appendChild(canvas);
    canvasContext = canvas.getContext('2d');
    start();
    colorRect(0, 0, canvas.width, canvas.height, canvasColor);
    requestAnimationFrame(mainLoop);

    var input = new Input();
    
    canvas.addEventListener('mousemove', function (evt) {
        var mousePos = input.calculateMousePos(evt);
        mouseX = mousePos.x;
        mouseY = mousePos.y;
    });
}


function colorRect(topLeftX, topLeftY, boxWidth, boxHeight, fillColor) {
    canvasContext.fillStyle = fillColor;
    canvasContext.fillRect(topLeftX, topLeftY, boxWidth, boxHeight);
}

function colorCircle(centerX, centerY, radius, fillColor) {
    canvasContext.fillStyle = fillColor;
    canvasContext.beginPath();
    canvasContext.arc(centerX, centerY, radius, 0, Math.PI * 2, true);
    canvasContext.fill();
}

function colorText(showWords, textX, textY, size, fillColor) {
    canvasContext.fillStyle = fillColor;
    canvasContext.font = size.toString() + "px Arial";
    canvasContext.fillText(showWords, textX, textY);
}