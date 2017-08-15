var stage;

manifest = [
    {src:"img/bee-sprite.png", id:"beeSprite"},
    {src:"js/build_sprites.js"},
    {src:"js/animations.js"},
    {src:"js/beacon.js"},
    {src:"js/items.js"}
];

var sprites, bee;

var buttons;

var game_state;

var state = {
    TITLE: 'title',
    PLAY: 'play',
    GAME_OVER: 'gameover'
};

function setGameState(state)
{
    game_state = state;
    // gameLoop();
}


function loadComplete(evt) {
    // titleScreen = new createjs.Bitmap(queue.getResult("title"));
    // backgroundScreen = new createjs.Bitmap(queue.getResult("background"));
    // instructionScreen = new createjs.Bitmap(queue.getResult("instructions"));
    // gameoverScreen = new createjs.Bitmap(queue.getResult("gameover"));
    
    buildBee();
    addSprites();
    console.log("hello 1");
    createjs.Ticker.addEventListener("tick", loop);
    setGameState(state.TITLE);
}

function loadFiles() {
    queue = new createjs.LoadQueue(true, "");
    queue.on("complete", loadComplete, this);
    queue.loadManifest(manifest);
}

function setupCanvas() {
    var canvas = document.getElementById("game");
    canvas.width = 500;
    canvas.height = 600;
    stage = new createjs.Stage(canvas);
}

function main() {
    setupCanvas();
    loadFiles();    
}

var FPS = 30;
function loop() {
    console.log("hello");
    bee.x += 3;
    if(bee.x > 520) bee.x = -50;
    if(game_state == state.PLAY)
    {
        
    }
    if(gameTimer == 5)
    {
        
    }
    stage.update();
}
createjs.Ticker.setFPS(FPS);

var gameTimer = 0;
var frameCount = 0;

function resetGameTimer() {
    gameTimer = 0;
    frameCount = 0;
}
function runGameTimer() {
    frameCount += 1;
    if(frameCount%(FPS/10) === 0) {
        gameTimer = frameCount/(FPS);
    }
}

function init() {
    main();
}


















