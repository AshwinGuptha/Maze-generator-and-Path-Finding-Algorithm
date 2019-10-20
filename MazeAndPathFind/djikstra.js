var grid=new Array;
var visited = [];
var lookingAt = [];
var path=[];
var start,end;

function djikstra()
{
    for(let i = 0; i < row; i++) {
        grid[i] = new Array(col);
    }

    for(let i = 0; i < row; i++) {
        for(let j = 0; j < col; j++ ) {
            grid[i][j] = cells[i+j*col];
        }
    }

    start = grid[0][0];
    end = grid[col-1][row-1];
    start.dist = 0;
    start.prev = start;
    current = start;
    lookingAt.push(start);
    while(current!=end)
    {
        draw2();
    }
    shortestPath(start,end);
}

function shortestPath(start, end) {
    current = end.prev;
    while(current.prev != current) {
        path.push(current);
        current = current.prev;
    }
    for(let i = 0; i < path.length; i++) {
        path[i].path=true;
        path[i].show(color(0,0,255,100));
    } 
}

function draw2()
{
    for(let i = 0; i < visited.length; i++) {
        visited[i].test=true;
        visited[i].second=false;
        visited[i].show(color(255,0,0,100));
    }
    for(let i = 0; i < lookingAt.length; i++) {
        lookingAt[i].test=true
        lookingAt[i].second=true;
        lookingAt[i].show(color(0,255,0,100));
    }
    /* start.show(0, 255, 0);
    end.show(255, 0, 0); */
    
   /*  console.log('current', current.i, current.j); */
    /* if(current === end) {
        console.log('finished');
        shortestPath(start, end);
        noLoop();
    } */
    var n=[];
    n = current.neighbours;
    for(let i = 0; i < n.length; i++) {
        neighbour = n[i];
        if(visited.includes(neighbour)) {
            continue;
        }
        if(!lookingAt.includes(neighbour)) {
            lookingAt.push(neighbour);
        }
        let tentativeDist = current.dist + 1;
        if(tentativeDist < n[i].dist) {
            n[i].dist = tentativeDist;
            n[i].prev = current;
        }
    }
    visited.push(current);
    removeIndex(lookingAt, current);
    let minNode = -1;
    let minDist = Infinity;
    for(let i = 0; i < lookingAt.length; i++) {
        if(lookingAt[i].dist < minDist) {
            minDist = lookingAt[i].dist;
            minNode = lookingAt[i];
        }
    }
    current = minNode;
    /* console.log('visited ', visited);
    console.log('looking at', lookingAt); */
    //console.log('im here')

    if(!lookingAt){
        noLoop();
    }
}