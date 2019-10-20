var col,row,i,j;
var w=20;
var cells=[],s=[];
var current;

function setup() {
	createCanvas(600, 600);
	col=floor(width/w);
	row=floor(height/w);
	//frameRate(100);
	for(j=0;j<row;j++)
	{
		for(i=0;i<col;i++)
		{
			var cell=new Cell(i,j);
			cells.push(cell);
		}	
	}
	current=cells[0];
}


function draw() {
	background("#101010");
	for(i=0; i<cells.length; i++)
	{
		cells[i].show(color(0,0,255,100));
	}
	current.visited=true;
	var next=current.checkN();
	if(next)
	{
		next.visited=true;
		removeWall(current,next);
		s.push(current);
		current=next;
	}
	else if(s.length>0)
	{
		current=s.pop();	
	}
	
}

function index(i,j)
{
	if(i<0||j<0||i>col-1||j>row-1)
	{
		return -1;
	}
	else
	{
		return i+j*col;
	}
	
}

function removeWall(c,n)
{
	var x=c.i-n.i;
	var y=c.j-n.j;
	if(x===1)
	{
		c.walls[3]=false;
		n.walls[1]=false;
		//console.log(c);
	}
	if(x===-1)
	{
		n.walls[3]=false;
		c.walls[1]=false;
	}
	if(y===1)
	{
		c.walls[0]=false;
		n.walls[2]=false;
	}
	if(y===-1)
	{
		n.walls[0]=false;
		c.walls[2]=false;
	}
}

function Cell(i,j)
{
	this.i=i;
	this.j=j;
	this.visited=false;
	this.walls=[true,true,true,true];
	this.second=false;
	this.test=false;
	this.path=false;
	this.checkN = function()
	{
		var N=[];
		var top,right,left,bottom;
		top=cells[index(i,j-1)];
		right=cells[index(i+1,j)];
		left=cells[index(i-1,j)];
		bottom=cells[index(i,j+1)];

		if(top&& !top.visited)
		{
			N.push(top);
		}
		if(bottom&& !bottom.visited)
		{
			N.push(bottom);
		}
		if(right&& !right.visited)
		{
			N.push(right);
		}
		if(left&& !left.visited)
		{
			N.push(left);
		}

		if(N.length>0)
		{
			var a=floor(random(0,N.length));
			return N[a];
		}

	}

	this.show = function(col)
	{
		stroke(255);
		noFill();
		var x=this.i*w;
		var y=this.j*w;
		if(this.walls[0])
			line(x,y,x+w,y);
		if(this.walls[1])
			line(x+w,y,x+w,y+w);
		if(this.walls[2])
			line(x+w,y+w,x,y+w);
		if(this.walls[3])
			line(x,y+w,x,y);
		
	if(!this.test)	
	{
		if(this.visited)
		{
			noStroke();
			fill(col);
			rect(x,y,w,w);
		}
	}
	else
	{	
		if(this.second)
		{
			noStroke();
			fill(0,255,0,100);
			rect(x,y,w,w);
			
		}
		else if(!this.path){
			
			noStroke();
			fill(255,0,0,100);
			rect(x,y,w,w);
		}
		else{
			noStroke();
			fill(252,186,3,100);
			rect(x,y,w,w);
		}
		
		}
			
	
	}

//For A* algorithm

this.f=0;
this.g=0;
this.h=0;
this.neighbours=[];
this.previous=undefined;
this.addNeighbors = function()
{
	if(i<col-1&&!this.walls[1])
	{
		this.neighbours.push(grid[i+1][j]);
	}
	if(i>0&&!this.walls[3]){
		this.neighbours.push(grid[i-1][j]);
	}
	if(j<row-1&&!this.walls[2]){
		this.neighbours.push(grid[i][j+1]);
	}
	if(j>0&&!this.walls[0]){
		this.neighbours.push(grid[i][j-1]);
	}
}

//For Djikstra Algorithm

this.prev = -1;
this.dist = Infinity;


}