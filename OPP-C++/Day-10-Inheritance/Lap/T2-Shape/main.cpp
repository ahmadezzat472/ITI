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
    shape(int _color) {
        myColor = _color;
    }
    void setColor(int _myColor) {
        myColor = _myColor;
    }
    int getColor() {
        return myColor;
    }
    virtual void draw()=0;
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

class Picture {
    private:
    shape** shapePtr;
    int sahpeSize;

    public:
    Picture()
    {
        shapePtr=NULL;
        sahpeSize=0;
    }
    //set relationship
    void SetShapes(shape** _shapePtr,int _sahpeSize)
    {
        shapePtr=_shapePtr;
        sahpeSize=_sahpeSize;
    }


    //Process
    void Execute()
    {
        for (int i = 0; i < sahpeSize; i++)
        {
            shapePtr[i]->draw();
        }
    }

};

int main() {
    initgraph();

    MyLine lineArr [4] = {
        MyLine (201,433,201,515,200),   //left bottom line
        MyLine (255,433,255,515,200),   //right bottom line
        MyLine (178,174,157,366,15),   //left upper line
        MyLine (276,174,300,366,15)};  //right upper line
    MyCircle cirArr[2] = {
        MyCircle (227,364,150,169),      //large circle
        MyCircle (227,174,100,169)};     //small circle
    Rect recArr[1] = {Rect (36,515,430,590,200)};     //bottom rectangle

    shape* sPtrArr[7]={lineArr,&lineArr[1],&lineArr[2],&lineArr[3],cirArr,&cirArr[1],recArr};


    Picture p1;


    ///set relationship
    p1.SetShapes(sPtrArr,7);

    //process
    p1.Execute();

    ///Remove relationship
    //p1.SetLines(NULL,0);
    //p1.SetRects(NULL,0);
    return 0;
}
