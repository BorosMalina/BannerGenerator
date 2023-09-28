let myColor;

function setup () {
  createCanvas(1200, 460);
  background(255);
  
  myColor = color(random(255), random(255), random(255));
}

function changeBG () {
  myColor = color(random(255), random(255), random(255));
  select(".myButton").style('color', myColor);
  select(".myButton").html(myColor.toString('#rrggbb'));
  navigator.clipboard.writeText(myColor.toString('#rrggbb'));
  alert('Color ' + myColor.toString('#rrggbb') + ' copied to clipboard!');
}

function draw () {
  // Background color is changed every button press
  background(myColor);

 
}