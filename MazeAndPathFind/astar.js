var grid=new Array;
var openSet=[];
var closeSet=[];
var start,end,path=[];

function astar()
{
   
    for(i=0;i<col;i++)
    {
        grid[i]=new Array(row);
    }
    
    for(i=0;i<col;i++)
    {
        for(j=0;j<row;j++)
        {
            grid[i][j]=cells[i+j*col];
        }
    }
    for(i=0;i<col;i++)
    {
        for(j=0;j<row;j++)
        {
            grid[i][j].addNeighbors();
        }
    }
    start=grid[0][0];
    end=grid[col-1][row-1];
    openSet.push(start);
    if(openSet.length>0)
    {
        var l_index=0;
        for(i=0;i<openSet.length;i++)
        {
            if(openSet[i].f<openSet[l_index].f)
            {
                l_index=i;
            }
        }    
        current=openSet[l_index];
    }
    while(current!=end)
    {
        draw1();
    }
    for(i=0;i<path.length;i++)
    {
        path[i].path=true;
        path[i].show(color(0,0,255,100));
    }
}

function removeIndex(a,element)
{
    for(i=a.length-1;i>=0;i--)
    {
        if(a[i]==element)
        {
            a.splice(i,1);
        }
    }
}

function heuristic(a,b) 
{
    var d=dist(a.i,a.j,b.i,b.j);
    return d;
}


function draw1()
{
    if(openSet.length>0)
    {
        var l_index=0;
        for(i=0;i<openSet.length;i++)
        {
            if(openSet[i].f<openSet[l_index].f)
            {
                l_index=i;
            }
        }    
        current=openSet[l_index];

        if(current===end)
        {
            var temp=current;
            path.push(temp);
            while(temp.previous)
            {
                path.push(temp.previous);
                temp=temp.previous;
            }
            console.log('Done');
        }

        removeIndex(openSet,current);
        closeSet.push(current);

        var n=current.neighbours;
        for(i=0;i<n.length;i++)
        {
            var neighbour=n[i];
            if(!closeSet.includes(neighbour))
            {
                var tempg=current.g+1;
                if(openSet.includes(neighbour))
                {
                    if(tempg<neighbour.g)
                    {
                        neighbour.g=tempg;
                    }
                }
                else{
                    neighbour.g=tempg;
                    openSet.push(neighbour);
                }

                neighbour.h=heuristic(neighbour,end);
                neighbour.f=neighbour.g+neighbour.h;
                neighbour.previous=current;
            }
           
        }
    }

    else{

    }

    for(i=0;i<closeSet.length;i++)
    {
        closeSet[i].test=true;
        closeSet[i].second=false;
        closeSet[i].show(color(255,0,0,100));
    }

    for(i=0;i<openSet.length;i++)
    {
        openSet[i].test=true
        openSet[i].second=true;
        openSet[i].show(color(0,255,0,100));
        
    }

    

}
