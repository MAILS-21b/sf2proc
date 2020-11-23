#include "App.hpp"

bool App::setup()
{
    createWindow(800,600,"window");
    return true;
}

bool App::draw()
{
    log("ez");
    return true;
}