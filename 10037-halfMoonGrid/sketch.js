/* * * * * * * * * * * * * * * * * * * * * *
Daily sketch #37
16/01/2018
Samuel Mann
   - http://mistermann.me
   - https://www.instagram.com/colakollektiv/
* * * * * * * * * * * * * * * * * * * * * */

var modules = [];
var grid;

var hu;

function setup(){
   createCanvas(1000, 1000);
   background(0);

   grid = new grid(0,0,10,width);

   hu = random(360);

   for (var i = 0; i < grid.blocks.length; i++) {
      var b = grid.blocks[i];
      modules.push(new module(b.x, b.y, b.s, random(0.7*hu, 1.3 * hu)));
   }

   for (var i = 0; i < modules.length; i++) {
      modules[i].show();
   }

}

function draw(){

   fill(0,20);
   rect(0,0,width,height);

   for (var i = 0; i < modules.length; i++) {
      modules[i].update();
      modules[i].show();
   }

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
