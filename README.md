# sf2proc
SF2PROC - SFML To Processing

Easy and minimal coding environment for C++ creative coding

https://github.com/MAILS-21b/sf2proc

Supported Functions

void rect(int x,int y,int w,int h);

void circle(int x,int y,int diameter);

void ellipse(int x,int y,int w,int h);

void line(int x1,int y1,int x2,int y2);
void square(int x,int y,int l);
void quad(int x1,int y1,int x2,int y2,int x3,int y3,int x4,int y4);
void point(int x,int y);
void triangle(int x1,int y1,int x2,int y2,int x3,int y3);
sf::Image loadImage(std::string path);
void image(sf::Image image,int x,int y);
void image(sf::Image image,int x,int y,int w,int h);
void background(int color);
void fill(int color);
void fill(int r,int g,int b);
void fill(int r,int g,int b,int a);

Roadmap:

Box2D
More functions
Performance Improvements
