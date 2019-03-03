class Board
{
	constructor(w,h,size)
	{
		this.w = w;
		this.h = h;
		this.size = size;
		this.boardset = [];
		this.winningset = [[1,2,3,4],[5,6,7,8],[9,10,11,12],[13,14,15,0]];
		this.mouseWait = 0;
		this.avaliablenums = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,0];
		this.length = this.avaliablenums.length;
		this.wontext = createP("<h3>YOU CAN DO IT!</h3>");
		this.wontext.id("wontext");


		for(let y=0;y<this.h;y++)
		{
			this.boardset[y] = [];
			for(let x=0;x<this.w;x++)
			{
				this.boardset[y][x] = this.avaliablenums.splice(int(random(this.length)),1);
				this.length = this.avaliablenums.length;
			}
		}
	}

	display()
	{
		if (this.mouseWait>=1)
		{
			this.mouseWait -= 1;
		}
		for(let y=0;y<this.h;y++)
		{
			for(let x=0;x<this.w;x++)
			{
				stroke(255);
				noFill();
				textSize(32);

				if(this.boardset[y][x]!=0){
					text(this.boardset[y][x],x*this.size+50,y*this.size+50);
				}else
				{
					fill(100);
				}

				rect(x * this.size, y * this.size, this.size, this.size);

			}
		}

		let win = false;
		for (let y2 = 0; y2 < this.h; y2++) {
			for (let x2 = 0; x2 < this.w; x2++) {
				if (this.boardset[y2][x2] == this.winningset[y2][x2])
				{
					win = true;
				}else
				{
					win = false;
					break;
				}
			}
		}
		
		if (win)
		{
			this.wontext.html("<h3>YOU WON</h3>");
		}
		
	}

	MovePiece(x,y)
	{
		if (this.boardset[y][x] != 0){
			if (x+1 < this.w && this.boardset[y][x+1] == 0)
			{
				this.boardset[y][x+1] = this.boardset[y][x];
				this.boardset[y][x] = 0;
			} else if (x-1 > -1 && this.boardset[y][x-1] == 0)
			{
				this.boardset[y][x-1] = this.boardset[y][x];
				this.boardset[y][x] = 0;
			} else if (y+1 < this.h && this.boardset[y+1][x] == 0)
			{
				this.boardset[y+1][x] = this.boardset[y][x];
				this.boardset[y][x] = 0;
			} else if (y-1 > -1 && this.boardset[y-1][x] == 0)
			{
				this.boardset[y-1][x] = this.boardset[y][x];
				this.boardset[y][x] = 0;
			}
		}
	}

	mpEvent()
	{
		if (this.mouseWait<1){
			for(let y=0;y<this.h;y++)
			{
				for(let x=0;x<this.w;x++)
				{
					let xv = x*this.size;
					let yv = y*this.size;
					if (mouseX > xv && mouseX < xv+this.size && mouseY > yv && mouseY < yv+this.size)
					{
						this.MovePiece(xv/this.size,yv/this.size);
					}
				}
			}
			this.mouseWait += 10;
		}
	}
}