var Blue;
var xSpacing;
var ySpacing;
var xLinesHalf;
var yLinesHalf;
var stepSize;
var a;
var vLength;



function setup(){
    createCanvas(window.innerWidth, window.innerHeight, WEBGL);
    Blue = color(53, 152, 220);
    spacing = width/20;
    horizontalLines = 50;
    verticalLines = 50;

    stepSize = 0.5;
    


    background(255);

    a=0;
    vLength = 4000;
}

function draw(){
    
    rotateX(-a);

    fill(0);    
    
    //horizontal lines
    for(let i = -horizontalLines ; i <=horizontalLines ; i++){
        push();
        line(-width, i*spacing, -1, width, i*spacing, -1);
        pop();
    }

    ///vertical lines
    for(let i = -verticalLines ; i <=verticalLines ; i++){
        push();
        line(i*spacing, -vLength, -1, i*spacing, vLength, -1);
        pop();
    }
    
    //Points on y = x^2
        for(i = -verticalLines ; i<=verticalLines ; i+=stepSize){
            push();
            stroke(Blue);
            line(spacing*i, -spacing*(Math.pow(i, 2)), -1, spacing*(i+stepSize), -spacing*(Math.pow(i+stepSize, 2)), -1)
            
//            line(spacing*i, -spacing*Math.sqrt(1-Math.pow(i, 2)) -1, spacing*(i+stepSize), -spacing*Math.sqrt(1-Math.pow(i+stepSize, 2)), -1)
            
            pop();
        }


    a = a+0.01;

}
