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
