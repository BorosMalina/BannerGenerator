let myColor;
let emojiInput = "🍉"; //"👍";

function setup() {
  angleMode(DEGREES);
  createCanvas(1200, 460);
  background(255);
  myColor = color(random(255), random(255), random(255));
  select("#changeBG").html(myColor.toString("#rrggbb"));
}

function changeBG() {
  myColor = color(random(255), random(255), random(255));
  select("#changeBG").style("color", myColor);
  select("#changeBG").html(myColor.toString("#rrggbb"));
  navigator.clipboard.writeText(myColor.toString("#rrggbb"));

  //alert('Color ' + myColor.toString('#rrggbb') + ' copied to clipboard!');
}

function saveImage() {
  saveCanvas("my_custom_banner", "png");
}

function draw() {
  background(myColor);
  pattern();

  

  translate(600,230);
  rotate(-90);
  
  fill(180, 10, 65);
  circle(0,0,350);

  let hr = hour();
  let mn = minute();
  let sec = second();

  strokeWeight(10);
  stroke (0, 200, 50);

  fill(255, 20, 100);
  let secondAngle = map(sec, 0, 60, 0, 360);
  arc(0, 0, 300, 300, 0, secondAngle);

  fill(255, 80, 100);
  let minuteAngle = map(mn, 0, 60, 0, 360) //+ map(secondAngle, 0, 360, 0, 6);
  arc(0, 0, 250, 250, 0, minuteAngle);

  fill(255, 110, 100);
  let hourAngle = map(hr % 12, 0, 12, 0, 360) //+ map(minuteAngle, 0, 360, 0, 30);
  arc(0, 0, 200, 200, 0, hourAngle);


  push();
  rotate(secondAngle);
  stroke(0);
  drawingContext.setLineDash([1,15]);
  line(0,0,120,0);
  pop();

  push();
  rotate(minuteAngle);
  stroke(0);
  line(0,0,110,0);
  pop();

  push();
  rotate(hourAngle);
  stroke(0);
  line(0,0,80,0);
  pop();


}

function pattern() {
  for (let catIndex = 0; catIndex < windowWidth / 100; catIndex++) {
    for (let catRowIndex = 0; catRowIndex < 5; catRowIndex++) {
      text(emojiInput, catIndex * 100 + 30, catRowIndex*100+40);
      textSize(30);
    }
  }
}

function changePattern(){
  emojiInput = select('#InputEmoji').value();
  //print(emojiInput);
}


function checkList(){
 // select("#divStuff").hide();
  print('ok');
  for (let indexBox = 0; indexBox < 10; indexBox++) {
    createCheckbox("test", false).addClass("cringe");
  }
}
