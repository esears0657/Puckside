
//PuckSide:

var x = 20;

function setup(){
    createCanvas(400,300);
}

function draw(){
    background(20);

    //Creates canvas and makes background blackish

if(mouseX>200){
    fill("red");
    circle(mouseX,mouseY,x);
}else{
    fill("blue");
    circle(mouseX,mouseY,x);
    }
}
//if mouseX is more than 200 the circle is red, if not its blue


