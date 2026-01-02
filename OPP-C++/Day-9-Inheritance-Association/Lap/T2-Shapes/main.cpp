#include <iostream>
#include "graphics.h"
using namespace std;

class Point {
private:
    int x, y;

public:
    Point() { x = y = 0; }
    Point(int _x, int _y) { x = _x; y = _y; }

    void setX(int _x) { x = _x; }
    void setY(int _y) { y = _y; }
    int getX() { return x; }
    int getY() { return y; }
};

class shape {
protected:
    int myColor;
public:
    shape(int _color) { myColor = _color; }
    void setColor(int _myColor) { myColor = _myColor; }
    int getColor() { return myColor; }
};

class MyLine : public shape {
private:
    Point p1, p2;

public:
    MyLine(int p1X, int p1Y, int p2X, int p2Y, int _myColor)
        : p1(p1X, p1Y), p2(p2X, p2Y), shape(_myColor) {}

    void draw() {
        setcolor(myColor);
        line(p1.getX(), p1.getY(), p2.getX(), p2.getY());
    }
};

class Rect : public shape {
private:
    Point tl, br;
public:
    Rect(int tlX, int tlY, int brX, int brY, int _myColor)
        : tl(tlX, tlY), br(brX, brY), shape(_myColor) {}

    void draw() {
        setcolor(myColor);
        rectangle(tl.getX(), tl.getY(), br.getX(), br.getY());
    }
};

class MyCircle : public shape {
private:
    Point center;
    int radius;

public:
    MyCircle(int cX, int cY, int rad, int color)
        : center(cX, cY), shape(color) {
        radius = rad;
    }

    void draw() {
        setcolor(myColor);
        circle(center.getX(), center.getY(), radius);
    }
};

int main() {
    initgraph();

    MyCircle largeCir(227, 414, 150, 15);
    MyCircle smallCir(227, 224, 100, 15);
    largeCir.draw();
    smallCir.draw();

    MyLine leftLine(178, 224, 157, 414, 200);
    MyLine rightLine(276, 224, 300, 414, 200);
    leftLine.draw();
    rightLine.draw();

    MyLine bottomLeftLine(201, 483, 201, 515, 200);
    MyLine bottomRightLine(255, 483, 255, 515, 200);
    bottomLeftLine.draw();
    bottomRightLine.draw();

    Rect rec(36, 515, 430, 590, 60);
    rec.draw();
    return 0;
}
