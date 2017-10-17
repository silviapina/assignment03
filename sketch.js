var colorList1 = ['#4e0212',
                 '#92011a',
                 '#ce9759',
                 '#f9e0b7'];

var colorList2 = ['#244660',
                 '#55cbdb',
                 '#ddebc9',
                 '#94b99d'];


function setup() {
  createCanvas(500,500);
  noStroke();
  frameRate(8);
  
}

function draw() {

  //esagoni esterni
  for (var x = 0; x <= 560; x += 60) {
    for (var y = 0; y <= 535; y += 35) {

      if(mouseX <= 200){
        fill(color(random(colorList1)))
      } else {
        fill(color(random(colorList2)))
      }

  polygon(x, y, 20, 6); }}
  
  for (var x = 30; x <= 560; x += 60) {
    for (var y = 18; y <= 535; y += 35) {

      if(mouseX >= 300){
        fill(color(random(colorList2)))
      } else {
        fill(color(random(colorList1)))
      }

  polygon(x, y, 20, 6); }}
  
  //esagoni intermedi
  for (var w = 0; w <= width; w += 60) {
    for (var h = 0; h <= height; h += 35) {
      
        fill(255)
      

  polygon(w, h, 12, 6); }}
  
  for (var w = 30; w <= width; w += 60) {
    for (var h = 18; h <= height; h += 35) {
      fill(255)

        fill(255)
      
  polygon(w, h, 12, 6); }}
  
  
  
  //esagoni interni
  for (var w = 0; w <= width; w += 60) {
    for (var h = 0; h <= height; h += 35) {
      if((mouseY >= 200 && mouseY <= 300) || (mouseX >=200 && mouseX <=300)) {
        fill(255)
      } else if(mouseY < 200){
        fill(color(random(colorList1)))
      } else {
        fill(color(random(colorList2)))
      }

  polygon(w, h, random()*8, 6); }}
  
  for (var w = 30; w <= width; w += 60) {
    for (var h = 18; h <= height; h += 35) {
      if((mouseY >=200 && mouseY <=300) || (mouseX >=200 && mouseX <=300)) {
        fill(255)
      } else if(mouseY < 200){
        fill(color(random(colorList1)))
      } else {
        fill(color(random(colorList2)))
      }

  polygon(w, h, random()*8, 6); }}



}

function polygon(x, y, radius, npoints) {
  var angle = TWO_PI / npoints;
  beginShape();
  for (var a = 0; a < TWO_PI; a += angle) {
    var sx = x + cos(a) * radius;
    var sy = y + sin(a) * radius;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}
  
  
  
  
  
  
