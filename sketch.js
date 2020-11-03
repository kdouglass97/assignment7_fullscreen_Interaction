let button;
let ele;
let link1;
//let song;

//function preload() {
//    song = loadSound('assets/lofi.mp3');
//}
function setup() {
  createCanvas(windowWidth, windowHeight);
    
    button = createButton('8');
   
    repositionButtons();
    
    button.mousePressed(bColor);

    myEl = createElement("p1","press the magic 8");
    
    link1 = createA('https://www.youtube.com/watch?v=cbuZfY2S2UQ&ab_channel=jaren134jaren134', 'set the mood', '[_blank]');
}

function draw() {
//  background(100);
    myEl.position(width/2,3*height/4);
    myEl.style('font-family', 'Montserrat');
    myEl.style('font-size', '20px');
    myEl.style('black');
    
    link1.position(width/2, height-100);
    link1.style('black');
    
    
    fill(0);
    ellipseMode(CENTER);
    ellipse(width/2, height/2,200);
}
function bColor() {
    let colorSet = [color(59,176,174), color(28,84,50), color(113,208,165)];
    let colors = random(colorSet);  
    background(colors);
    
}
function repositionButtons() {
    button.position(windowWidth/2-(button.width/2),height/2);
}


function windowResized () {
    resizeCanvas(windowWidth, windowHeight);
    repositionButtons();
    bColor();
    
     fill(0);
    ellipse(width/2,height/2,200);
}
