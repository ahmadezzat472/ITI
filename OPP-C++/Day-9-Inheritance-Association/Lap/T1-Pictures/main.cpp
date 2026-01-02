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

class Picture {
    private:
    MyLine *lPtr;
    int lSize;
    Rect *rPtr;
    int rSize;
    MyCircle *cPtr;
    int cSize;

    public:
    Picture()
    {
        lPtr=NULL;
        lSize=0;
        rPtr=NULL;
        rSize=0;
        cPtr=NULL;
        cSize=0;
    }
    //set relationship
    void SetLines(MyLine* _lPtr,int _lSize)
    {
        lPtr=_lPtr;
        lSize=_lSize;
    }
     void SetRects(Rect* _rPtr,int _rSize)
    {
        rPtr=_rPtr;
        rSize=_rSize;
    }

     void SetCircle(MyCircle* _cPtr,int _cSize)
    {
        cPtr=_cPtr;
        cSize=_cSize;
    }


    //Process
    void Execute()
    {
        for (int i = 0; i < lSize; i++)
        {
            lPtr[i].draw();
        }
        for (int i = 0; i < rSize; i++)
        {
            rPtr[i].draw();
        }
        for (int i = 0; i < cSize; i++)
        {
            cPtr[i].draw();
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

    Picture p1;


    ///set relationship
    p1.SetLines(lineArr,4);
    p1.SetRects(recArr,1);
    p1.SetCircle(cirArr,2);
    //process
    p1.Execute();

    ///Remove relationship
    //p1.SetLines(NULL,0);
    //p1.SetRects(NULL,0);
    return 0;
}
