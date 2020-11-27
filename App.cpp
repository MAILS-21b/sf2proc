#include "App.hpp"

int width = 800;
int height = 600;

int x1 = 0;
int x2 = 0;

bool App::setup()
{
    createWindow(width,height,"window");
    return true;
}

bool App::draw()
{
    for(int i=0;i<width;i+=50)
    {
        fill(255);
        rect(i,0,25,height);
    }
    fill(255);
    rect(x1,width / 4,50,25);
    
    fill(0);
    rect(x2,width / 4 * 2,50,25);
    
    x1++;
    x2++;
    
    return true;
}