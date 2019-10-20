
function reset()
{
    for(i=0;i<col;i++)
    {
        for(j=0;j<row;j++)
        {
            cells[i+j*col].second=false;
            cells[i+j*col].test=false;
            cells[i+j*col].path=false;
            cells[i+j*col].show(color(0,0,255,100));
        }
    }
}