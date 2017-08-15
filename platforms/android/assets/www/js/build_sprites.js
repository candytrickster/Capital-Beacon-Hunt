function buildBee()
{
    var beeSheet = new createjs.SpriteSheet({
        images: [queue.getResult("beeSprite")],
        frames: [[0,0,49,55],[59,0,51,53],[0,65,52,52],[62,65,52,50],[0,65,52,52],[59,0,51,53]],
        animations: {
            fly: [0, 5, "fly",.8]
            }     
        });
    
    bee = new createjs.Sprite(beeSheet);  //create a sprite from the frame and animation data
    bee.gotoAndPlay("fly");
}

function buildSmallBee() {
    var smallBeeSheet = new createjs.SpriteSheet({
        images: [queue.getResult("smallBeeSprite")],
        frames: [[0,0,31,36],[33,0,32,37],[67,0,33,36],[0,39,34,35],[36,39,33,35],[71,39,32,37]],
        animations: {
            fly: [0, 5, "fly"]
            }     
        });
    
    sbee = new createjs.Sprite(smallBeeSheet);  
    sbee.gotoAndPlay("fly");
}

function buildBigBee() {
    var bigBeeSheet = new createjs.SpriteSheet({
        images: [queue.getResult("bigBeeSprite")],
        frames: [[0,0,68,78],[78,0,69,77],[157,0,71,75],[0,88,72,73],[157,0,71,75],[82,88,69,77]],
        animations: {
            fly: [0, 5, "fly",.5]
            }     
        });
    
    bbee = new createjs.Sprite(bigBeeSheet);  
    bbee.gotoAndPlay("fly");
}

function setSpritePlacement() {
    bee.x= -50;
    bee.y= 200;

    bbee.x= cwidth+50;
    bbee.y= 275;

    sbee.x= -100;
    sbee.y= 420;
}


function addSprites()
{
    stage.addChild(bee);
    stage.addChild(sbee);
    stage.addChild(bbee);
}

