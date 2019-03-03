let brd;

function setup()
{
	createP("<u><h1>15's Puzzle</h1></u>");
	createP("<b><h5>Made By Muhammed Shameel Kv</h5></b>")
	createCanvas(400,400);
	brd = new Board(4, 4, 100);
}

function draw()
{
	background(0);
	brd.display();
}

function mousePressed()
{
	if (brd){
		brd.mpEvent();
	}
}