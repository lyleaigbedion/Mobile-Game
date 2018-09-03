//array of Swipe directions
var leftArrow = [];
var rightArrow = [];
var upArrow = [];
var downArrow = [];

var upRArrow = [];
var upLArrow = [];
var downRArrow = [];
var downLArrow = [];

//images
var arrowL;
var arrowR;
var arrowU;
var arrowD;

var arrowUL;
var arrowUR;
var arrowDL;
var arrowDR;

//touch region
//var region = new ZingTouch.Region(

//control the arrow spawn interval
var arrowLIn;
var arrowRIn;
var arrowUIn;
var arrowDIn;

var arrowULIn;
var arrowURIn;
var arrowDLIn;
var arrowDRIn;

var lastArrowLIn;
var lastArrowRSIn;
var lastArrowUIn;
var lastArrowDIn;

var lastArrowULIn;
var lastArrowURIn;
var lastArrowDLIn;
var lastArrowDRIn;

//integers
var arrowLint = 10;
var arrowRint = 10;
var arrowUint = 10;
var arrowDint = 10;

var arrowULint = 10;
var arrowURint = 10;
var arrowDLint = 10;
var arrowDRint = 10;

//Spawn time
var ranArrowSpawnInterval = 5500;
var lastArrowSpawn = 0;

//Song length
var timerDuration = 154110;	//  2min 34sec

//music and amplitude
var song, analyzer;

var gameOver;
//hammer.js stuff, prevents phone from using default gestures
var options = {
		preventDefault: true
	};
//color codes
var r;
var g;
var b;
	
	
function preload() {
  song = loadSound('assets/untitled3.mp3');
}
	
	
function setup() {
	
	pixelDensity(1);
	createCanvas(windowWidth, windowHeight);
	song.play();
	
	  //create a new Amplitude analyzer
	analyzer = new p5.Amplitude();
	
	//Patch the input to an volume analyzer
	analyzer.setInput(song);
	
	timerDuration += millis();
	
	
}

function draw() {
	
	
	var timer = timerDuration - millis();
	
	 // Get the average (root mean square) amplitude
  var rms = analyzer.getLevel();
  noFill();
  stroke(255);
  strokeWeight(4);
  
		// spawns an object in intervals
		if(millis() > lastArrowSpawn + ranArrowSpawnInterval) {
			lastArrowSpawn = millis();
			
			
			var rando = int(random(8));
			
			    //if(rando == 0) {
				// Right arrow
				var x = windowWidth/2;
				var y = 0;
				var xSpeed = 0;
				var ySpeed = 2;

				rightArrow.push(new RightArrow(x,y,xSpeed,ySpeed));
			//}	
  
			
			
			    /*if(rando == 1) {
				// left arrow
				var x = windowWidth/2;
				var y = 0;
				var xSpeed = 0;
				var ySpeed = 2;

				rightArrow.push(new RightArrow(x,y,xSpeed,ySpeed));
			}	
			
			 if(rando == 2) {
				// up arrow
				var x = windowWidth/2;
				var y = 0;
				var xSpeed = 0;
				var ySpeed = 2;

				rightArrow.push(new RightArrow(x,y,xSpeed,ySpeed));
			}
			
			
			 if(rando == 3) {
				// down arrow
				var x = windowWidth/2;
				var y = 0;
				var xSpeed = 0;
				var ySpeed = 2;

				rightArrow.push(new RightArrow(x,y,xSpeed,ySpeed));
			}	
			
			 if(rando == 4) {
				// upright arrow
				var x = windowWidth/2;
				var y = 0;
				var xSpeed = 0;
				var ySpeed = 2;

				rightArrow.push(new RightArrow(x,y,xSpeed,ySpeed));
			}
			
			
			if(rando == 5) {
				// upleft arrow
				var x = windowWidth/2;
				var y = 0;
				var xSpeed = 0;
				var ySpeed = 2;

				rightArrow.push(new RightArrow(x,y,xSpeed,ySpeed));
			}
			if(rando == 6) {
				// downright arrow
				var x = windowWidth/2;
				var y = 0;
				var xSpeed = 0;
				var ySpeed = 2;

				rightArrow.push(new RightArrow(x,y,xSpeed,ySpeed));
			}
			
			if(rando == 7) {
				// downleft arrow
				var x = windowWidth/2;
				var y = 0;
				var xSpeed = 0;
				var ySpeed = 2;

				rightArrow.push(new RightArrow(x,y,xSpeed,ySpeed));
			}	*/
			
			

			
			
			
		}

	//swipe behaviours
	var hammertime = new Hammer(document.body, options);
	hammertime.get("swipe").set({ direction: Hammer.DIRECTION_ALL });
	hammertime.on("swipe", function(eventObject) {
		
  
		//-180 and 180 (0 means RIGHT, -90 means UP, 90 means DOWN, 180 means LEFT)
		
		if(eventObject.angle < -100 && eventObject.angle > -155) {
			//UP-LEFT SWIPE...
			textSize(32);
			noStroke();
			fill(0, 102, 153); 
			text("up left", 10, 30);
			
		} else if(eventObject.angle <-10 && eventObject.angle > -50) {
			textSize(32);
			fill(0, 102, 153);
			text("up right", 10, 700);
			
			//UP-RIGHT SWIPE...
		} else if(eventObject.angle < 75 && eventObject.angle > 45 ) {
			textSize(32);
			fill(255,0,0);
			text("down right", 10, 60);
			
			
			//DOWN-RIGHT SWIPE...
		} else if (eventObject.angle < 165  && eventObject.angle > 120){
			textSize(32);
			fill(255,0,0);
			text("down left", 10,900);
			//DOWN-LEFT SWIPE...
		}else if(eventObject.angle <30   && eventObject.angle > -49){
				textSize(32);
				fill(255,0,0);
				text("right", 10,120);
				//right swipe
		}else if(eventObject.angle <220   && eventObject.angle > 164){
				textSize(32);
				fill(255,0,0);
				text("LEFT", 10,300);
				//left swipe
		}else if(eventObject.angle <-70   && eventObject.angle > -99){
				textSize(32);
				fill(255,0,0);
				text("UP", 10,200);
				//left swipe
		}else if(eventObject.angle <164   && eventObject.angle > 76){
				textSize(32);
				fill(255,0,0);
				text("DOWN", 10,400);
				//left swipe
		}
		
		
	});
	//background(0, 61, 22);
	
	// Draw an ellipse with size based on volume
	//ellipse(width/2, height/2, 10+rms*400, 10+rms*400);
	//ellipse(0, height, 10+rms*900, 10+rms*900);
	//ellipse(width, 0, 10+rms*900, 10+rms*900);
	
	//ellipse(0, 0, 10+rms*900, 10+rms*900);
	//ellipse(width, height, 10+rms*900, 10+rms*900);
	
	for(var i = rightArrow.length - 1; i >= 0; i--) {
			rightArrow[i].update();
			rightArrow[i].display();

			// is it marked for deletion?
			if(rightArrow[i].deleteMe) {
				rightArrow.splice(i,1);
			}
		}
		
	
	
	
	
		
		
}
		

function RightArrow (x, y, xSpeed, ySpeed) {
 
	// internal variables
	this.x = x;
	this.y = y;
	this.xSpeed = xSpeed;
	this.ySpeed = ySpeed;

	this.diameter = 40;

	this.deleteMe = false;
 
	this.update = function() {

		// move
		this.x += xSpeed;
		this.y += ySpeed;

		

		// have we touched the sides?
		if(this.x < 0 || this.x > width) {
			this.deleteMe = true;	// if so, mark for deletion
		}
		if(this.y < 0 || this.y > height) {
			this.deleteMe = true;
		}
		
		
		
	}
 
	this.display = function() {
		fill(0,0,0);
		noStroke();
		ellipse(this.x, this.y, this.diameter, this.diameter);
	}
}




		





		
		
		
	
	









