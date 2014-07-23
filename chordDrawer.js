// README
// 
// To draw a chord on the page, create a canvas element 
// with the chord as the `alt' attribute. 
// 
// 	<canvas alt="x00212 D7/A"></canvas>
//
//	gets you
//
// xoo___
// ||||0|
// |||0|0
// ||||||
// ||||||
//
//  D7/A

var fontChoice = 	"bold 14px Helvetica"; 
var numberOfFrets = 7; 
var xOffset = 0;
var yOffset = 0;

function drawChord (chordCode) {
	function drawFretboard () {
		ctx.fillStyle = "#586e75";	ctx.strokeStyle = ctx.fillStyle;
		// strings
		for (i=0;i<6;i++) {ctx.fillRect(xOffset+(5+(i*10)), 10+yOffset, 1, 15*numberOfFrets);}
		// frets
		for (i=0;i<=numberOfFrets;i++) {ctx.fillRect(5+xOffset, yOffset+(10+(i*15)), 50, 1)}
	}
	
	function finger (fret, string) {
		ctx.beginPath();
		ctx.arc((10*string)-4.5,3.5+(15*fret), 3, 0, Math.PI*2, true);
		ctx.closePath(); ctx.fill();
	}

	function markOpen (string) {
		ctx.beginPath();
		ctx.arc((10*string)-4.5,3.5, 2, 0, Math.PI*2, true);
		ctx.closePath(); ctx.stroke();
	}

	function mute (string) {
		ctx.font = "normal 10px Helvetica Neue";
		ctx.textBaseline = "middle";
		ctx.textAlign = "center";
		ctx.fillText("x",(10*string)-4.5, 2);
	}

	function drawChordName (chordName) {
		ctx.font = fontChoice;
		ctx.textBaseline = "top";
		ctx.textAlign = "center";
		ctx.fillText(chordName, 30+xOffset, 17+(15*numberOfFrets));
	}
	
	drawFretboard();
	for (var i=0; i < 6; i++) {
		var fret = chordCode.charAt(i);
		if (fret == 'x') {mute(i+1);}
		if (fret == '0') {markOpen(i+1);}
		else {finger(fret, i+1);}
	};
	drawChordName(chordCode.substr(7));
};






