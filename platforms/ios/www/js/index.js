/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        // var parentElement = document.getElementById(id);
        // var listeningElement = parentElement.querySelector('.listening');
        // var receivedElement = parentElement.querySelector('.received');

        // listeningElement.setAttribute('style', 'display:none;');
        // receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};

var stage;

function init() {
    stage = new createjs.Stage("demoCanvas");
    var circle = new createjs.Shape();
    circle.graphics.beginFill("Crimson").drawCircle(0, 0, 50);
    circle.x = 100;
    circle.y = 100;
    stage.addChild(circle);
    createjs.Tween.get(circle, {loop: true})
      .to({x: 400}, 1000, createjs.Ease.getPowInOut(4))
      .to({alpha: 0, y: 75}, 500, createjs.Ease.getPowInOut(2))
      .to({alpha: 0, y: 125}, 100)
      .to({alpha: 1, y: 100}, 500, createjs.Ease.getPowInOut(2))
      .to({x: 100}, 800, createjs.Ease.getPowInOut(2));
    createjs.Ticker.setFPS(60);
    createjs.Ticker.addEventListener("tick", stage);

}

var foundMsg = '';
var foundNext;

function setFoundVar(msg, next){
    foundMsg += msg;
    foundNext = next;
}


var bacon = {};
bacon.timer = null;
bacon.beacons = {};
bacon.appContainer = document.querySelector('.app');


bacon.scan = function() {
    evothings.eddystone.startScan(function(beacon) {
        // Update beacon data.
        beacon.timeStamp = Date.now();
        bacon.beacons[beacon.address] = beacon;
    },
    function(error) {
        bacon.message('scan error: ' + error);
    });
}

bacon.mapRSSI = function(rssi) {
    if (rssi >= 0) return 1; // Unknown RSSI maps to 1.
    if (rssi < -100) return 100; // Max RSSI
    return 100 + rssi;
}

bacon.getSortedList = function(beacons) {
    var beaconList = [];
    for (var key in beacons) {
        beaconList.push(beacons[key]);
    }
    beaconList.sort(function(beacon1, beacon2) {
        return bacon.mapRSSI(beacon1.rssi) < bacon.mapRSSI(beacon2.rssi);
    });
    return beaconList;
}

bacon.display = function(address) {
    bacon.appContainer.classList.add('loading');
    var baconHtml = '';
    var sortedList = bacon.getSortedList(bacon.beacons);
    
    for (var i = 0; i < sortedList.length; i++) {
        var baconBit = sortedList[i];
        if (baconBit.name == '' || baconBit.name == null) {
            baconBit.name = 'NA';
        }
        if(baconBit.address == address && baconBit.rssi >= -70) {

            bacon.message('You found it! The answer was the "'+foundMsg+'"');
            bacon.timer = null;
            baconHtml += foundNext;
        }
        
    }
    
    // document.querySelector('h1 span.count').innerText = parseInt(sortedList.length);
    document.querySelector('#found-beacons').innerHTML = baconHtml;
    bacon.appContainer.classList.remove('loading');
}


bacon.updateList = function(address) {
    // bacon.removeOld();
    bacon.display(address);
}

bacon.message = function(text) {
    document.querySelector('#message').innerHTML = text;
}





