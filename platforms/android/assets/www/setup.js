var stage;

manifest = [
    {src:"img/bee-sprite.png", id:"beeSprite"},
    {src:"img/small-bee.png", id:"smallBeeSprite"},
    {src:"img/big-bee.png", id:"bigBeeSprite"},
    {src:"img/playbtn.png", id:"playbtnSheet"},
    {src:"js/build_sprites.js"},
    {src:"js/build_btns.js"},
    {src:"js/animations.js"},
    {src:"js/beacon.js"},
    {src:"js/items.js"}
];

var sprites, bee, sbee, bbee;

var cwidth, cheight;

var buttons, playbtn;

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
    buildSmallBee();
    buildBigBee();
    setSpritePlacement();
    addSprites();
    buildPlayBtn();
    setBtnPlacement();
    addBtns();
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
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    cwidth = canvas.width;
    cheight = canvas.height;
    stage = new createjs.Stage(canvas);
}

function main() {
    setupCanvas();
    loadFiles();    
}

var FPS = 30;
function loop() {
    bee.x += 5;
    sbee.x += 7;
    bbee.x -= 3;
    if(bee.x > (cwidth+50)) bee.x = -50;
    if(sbee.x > (cwidth+50)) sbee.x = -50;
    if(bbee.x < -75) bbee.x = cwidth+50;
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


















