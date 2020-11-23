#pragma once

#include "sf2proc.hpp"
#include <iostream>

class App : public sf2Proc
{
public:
    App(){}
public:
    bool setup() override;
    bool draw() override;
};
