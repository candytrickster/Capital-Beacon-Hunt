function buildBee()
{
    var beeSheet = new createjs.SpriteSheet({
        images: [queue.getResult("beeSprite")],
        frames: [[0,0,181,203],[181,0,183,203],[0,203,189,200],[189,203,192,195],[0,403,189,201],[189,403,183,203]],
        animations: {
            fly: [0, 5, "fly"]
            }     
        });
    
    bee = new createjs.Sprite(beeSheet);  //create a sprite from the frame and animation data
    bee.x=100;
    bee.y=370;
    bee.gotoAndPlay("fly");
}

function addSprites()
{
    stage.addChild(bee);
}
