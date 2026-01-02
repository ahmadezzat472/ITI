#include <iostream>
using namespace std;

class Geoshape
{
protected:
    double dim1;
    double dim2;

public:
    void SetDim1(double _dim1) { dim1 = _dim1; }
    double GetDim1() { return dim1; }

    void SetDim2(double _dim2) { dim2 = _dim2; }
    double GetDim2() { return dim2; }

    Geoshape()
    {
        dim1 = dim2 = 0;
    }

    Geoshape(double _dim1, double _dim2)
    {
        dim1 = _dim1;
        dim2 = _dim2;
    }

    Geoshape(double _dim)
    {
        dim1 = dim2 = _dim;
    }

    virtual ~Geoshape() {}

    virtual double Area() = 0;
};

class Rect : public Geoshape
{
public:
    Rect() {}

    Rect(double _d1, double _d2) : Geoshape(_d1, _d2) {}

    ~Rect() {}

    double Area()
    {
    return dim1 * dim2;
    }
};

class Square : public Geoshape
{
public:
    Square() {}

    Square(double _d) : Geoshape(_d) {}

    ~Square() {}

    double Area()
    {
    return dim1 * dim2;
    }
};

class Circle : public Geoshape
{
public:
    Circle() {}

    Circle(double _radius)
    {
        dim1 = dim2 = _radius;
    }

    ~Circle() {}

    double Area()
    {
    return 3.14 * dim1 * dim2;
    }
};

class Tri : public Geoshape
{
public:
    Tri() {}

    Tri(double _base, double _height) : Geoshape(_height, _base) {}

    ~Tri() {}

    double Area()
    {
        return 0.5 * dim1 * dim2;
    }
};

double SumOfAreasV2(Geoshape** _gPtrArr, int _gSize)
{
    double sum = 0;
    for (int i = 0; i < _gSize; i++)
    {
        sum += _gPtrArr[i]->Area();
    }
return sum;
}

int main()
{
    Rect rarr[3] = { Rect(3,4), Rect(2,5), Rect(2,5) };
    Square sarr[2] = { Square(10), Square(10) };
    Tri tarr[2] = { Tri(2,10), Tri(2,10) };
    Circle c(10);

    Geoshape* gPtrArr[8] =
    {
        &rarr[0], &rarr[1], &rarr[2],
        &sarr[0], &sarr[1],
        &tarr[0], &tarr[1],
        &c
    };
cout << SumOfAreasV2(gPtrArr, 8);
return 0;
}
