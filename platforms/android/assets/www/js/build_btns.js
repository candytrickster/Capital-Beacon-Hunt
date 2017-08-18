function buildPlayBtn() {
    // var playbtnSheet = new createjs.SpriteSheet({
    //     images: [queue.getResult("playbtnSheet")],
    //     frames: [[0,0,201,109],[211,0,201,111],[0,121,201,113],[211,121,200,116],
    //     [0,247,201,113],[211,247,201,111],[0,370,201,109],[211,370,201,111],
    //     [0,491,200,113],[210,491,200,115],[0,616,200,113],[210,616,201,111]],
    //     animations: {
    //         static: [0, 11, "static",.2]
    //         }     
    //     });

    var playbtnSheet = new createjs.SpriteSheet({
        images: [queue.getResult("playbtnSheet")],
        frames: [[0,0,196,57]],
        animations: {
            static: [0, 0, "static"]
            }     
        });
    
    playbtn = new createjs.Sprite(playbtnSheet);
    playbtn.on("click", setupPlay);  
    playbtn.snapToPixel = false;
    playbtn.gotoAndStop("static");
}

function setBtnPlacement() {
    playbtn.x = (cwidth/2)-(playbtn.getBounds().width/2);
    playbtn.y = cheight-(playbtn.getBounds().height+playbtn.getBounds().height/2);
}


function addBtns()
{
    stage.addChild(playbtn);
}
