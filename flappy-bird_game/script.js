// board 
let board;
let boardWidth = 350;
let boardHeight = 540;
let context;
// 
let birdWidth = 40;
let birdHeight = 34;
let birdX =  birdWidth/8;
let birdY= birdHeight/2;
let birdImg;

let bird = {
    x : birdX,
    y : birdY,
    width : birdWidth,
    height : birdHeight
}
let pipeArray = []
let pipeWidth = 64;
let pipeHeight = 512
let pipeX = boardWidth
let pipeY = 0

let topPipeImg
let bottomPipeImg
// physics
let volocityX =

window.onload = function() {
    board = document.getElementById("board");
    board.height = boardHeight;
    board.width = boardWidth;
    context = board.getContext("2d");
    
    // draw flaap bird

    // context.fillStyle = "green";
    // context.fillRect(bird.x, bird.y , bird.width, bird.height );
    // load image
    birdImg = new Image()
    birdImg.src = "assest/bird-img.png";
    birdImg.onload = function(){
        context.drawImage(birdImg, bird.x, bird.y , bird.width, bird.height)
    }
    topPipeImg = new Image()
    topPipeImg.src = "assest/top-imge.png"
    bottomPipeImg = new Image()
    bottomPipeImg.src = "assest/botom-img.png"
    requestAnimationFrame(update)
    setInterval(placePipes, 1500)
}

function update(){
    requestAnimationFrame(update)
    context.clearRect(0,0, board.width, board.height)
    context.drawImage(birdImg, bird.x, bird.y , bird.width, bird.height)
    // pipes
    for(let i = 0; i < pipeArray.length; i++){
  let pipe = pipeArray[i]
     context.drawImage(pipe.img, pipe.x, pipe.y , pipe.width, pipe.height)
    }
}

function placePipes(){
    let topPipe = {
        img : topPipeImg,
        x : pipeX,
        y : pipeY,
        width : pipeWidth,
       height : pipeHeight,
       passed : false
    }
    pipeArray.push(topPipe)
}