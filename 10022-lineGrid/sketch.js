/* * * * * * * * * * * * * * * * * * * * * *
Daily sketch #22
14/12/2017
Samuel Mann
   - http://mistermann.me
   - https://www.instagram.com/colakollektiv/
* * * * * * * * * * * * * * * * * * * * * */

var modules = [];
var gridSize = 20;

function setup(){
   createCanvas(1000, 1000);
   background(0);

   var hu = random(360);

   for (var i = 0; i < gridSize; i++) {
      var posY = i * (height/gridSize);
      for (var j = 0; j < gridSize; j++) {
         var posX = j * (width/gridSize);
         fillHsluv(random(360), 100, 50);
         noStroke();
         modules.push(new module(posX, posY, width/gridSize, random(0.7 * hu, 1.3*hu)));
      }
   }

   for (var i = 0; i < modules.length; i++) {
      modules[i].show();
   }

}

function draw(){

}

// ** ** ** ** ** ** ** ** ** ** ** ** ** ** ** **
// ** ** ** ** ** ** ** ** ** ** ** ** ** ** ** **

function fillHsluv(h, s, l) {
  var rgb = hsluv.hsluvToRgb([h, s, l]);
  fill(rgb[0] * 255, rgb[1] * 255, rgb[2] * 255);
}
function strokeHsluv(h, s, l) {
  var rgb = hsluv.hsluvToRgb([h, s, l]);
  stroke(rgb[0] * 255, rgb[1] * 255, rgb[2] * 255);
}
