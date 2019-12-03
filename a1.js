


// let canvas = document.createElement("canvas");
// let ctx = canvas.getContext("2d");
// canvas.width = 1000;
// canvas.height = 700;



let myBackground;



var gameArea = {
    canvas : document.createElement("canvas"),
    ctx : this.canvas.getContext("2d"),

    
    // canvas.width = 1000,
    // canvas.height = 700
}

// var myGameArea = {
//     canvas : document.createElement("canvas"),
//     start : function() {
//         this.canvas.width = 1000;
//         this.canvas.height = 700;
//         // this.canvas.style.cursor = "none"; //hide the original cursor

//         this.context = this.canvas.getContext("2d");
//         document.body.insertBefore(this.canvas, document.body.childNodes[0]);
//         this.frameNo = 0;
//         this.interval = setInterval(updateGameArea, 20);
//         window.addEventListener('mousemove', function (e) {
//             // console.log(e)
//             myGameArea.x = e.pageX;
//             myGameArea.y = e.pageY;
//         })
//     },

function startGame() {
    practer();
    this.interval = setInterval(updateGame, 20);
    console.warn('Game Starreteted');
    gameArea.canvas.width = 1000;
    gameArea.canvas.height = 700;
    myBackground = new component(1000, 700, "citymarket.png", 0, 0, "image");


};

// function component(width, height, color, x, y, type) {
//     this.type = type;
//     if (type == "image" || type == "background") {
//         this.image = new Image();
//         this.image.src = color;
//     }
//     this.width = width;
//     this.height = height;
//     this.speedX = 0;
//     this.speedY = 0;
//     this.x = x;
//     this.y = y;    
//     this.update = function() {
//         ctx = myGameArea.context;
//         if (type == "image") {
//             ctx.drawImage(this.image,
//                 this.x,
//                 this.y,
//                 this.width, this.height);
//                 if (type == "background") {
//                     ctx.drawImage(this.image, this.x + this.width, this.y, this.width, this.height);
//                 }
//         } else if (this.type == "text") {
//             ctx.font = this.width + " " + this.height;
//             ctx.fillStyle = color;
//             ctx.fillText(this.text, this.x, this.y);
//         } else {
//             ctx.fillStyle = color;
//             ctx.fillRect(this.x, this.y, this.width, this.height);
//         }
//     }
//     this.newPos = function() {
//         this.x += this.speedX;
//         this.y += this.speedY;
//     }

// }


function updateGame() {
    // clear();
    gameArea.canvas.width = 1000;
    gameArea.canvas.height = 700;
    // console.profile('update');
    updateBackground();
}

function clear() {
    ctx ? ctx.clearRect(0, 0, canvas.width, canvas.height) : console.log("nope");
}








// document.onkeydown = checkKeyDown;
// document.onkeyup = checkKeyUp;

// function checkKeyDown(e) {
//     myGamePiece.image.src = "angry.gif";
//     if (e.keyCode == '38') {
//         upBtn = true;
//         myGamePiece.speedY = -10; 
//     }
//     else if (e.keyCode == '40') {
//         downBtn = true;
//         myGamePiece.speedY = 10; 
//     }
//     else if (e.keyCode == '37') {
//         leftBtn = true;
//         myGamePiece.speedX = -10; 
//     }
//     else if (e.keyCode == '39') {
//         rightBtn = true;
//         myGamePiece.speedX = 10; 
//     }

// }

// function checkKeyUp(e) {
//     myGamePiece.image.src = "smiley.png";
//     if (e.keyCode == '38') {
//         upBtn = false;
//         myGamePiece.speedY = 0; 
//     }
//     else if (e.keyCode == '40') {
//         downBtn = false;
//         myGamePiece.speedY = 0; 
//     }
//     else if (e.keyCode == '37') {
//         leftBtn = false;
//         myGamePiece.speedX = 0; 
//     }
//     else if (e.keyCode == '39') {
//         rightBtn = false;
//         myGamePiece.speedX = 0; 
//     }
// }

  
