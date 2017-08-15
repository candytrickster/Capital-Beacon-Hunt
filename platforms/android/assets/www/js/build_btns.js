function buildPlayBtn() {
    var playbtnSheet = new createjs.SpriteSheet({
        images: [queue.getResult("playbtnSheet")],
        frames: [[0,0,137,75],[147,0,137,77],[294,0,137,79],[0,89,137,81],
        [147,89,137,79],[294,89,137,77],[0,180,137,75],[147,180,137,76],
        [294,180,137,79],[0,269,137,81],[147,269,137,79],[294,269,137,76]],
        animations: {
            static: [0, 11, "static",.5]
            }     
        });
    
    playbtn = new createjs.Sprite(playbtnSheet);  
    playbtn.gotoAndPlay("static");
}

function setBtnPlacement() {
    playbtn.x = 120;
    playbtn.y = cheight-100;
}


function addBtns()
{
    stage.addChild(playbtn);
}




