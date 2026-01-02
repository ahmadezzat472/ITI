#include <iostream>
#include <stdlib.h>
#include <windows.h>
using namespace std;

void gotoxy( int column, int row )
{
    COORD coord;
    coord.X = column;
    coord.Y = row;
    SetConsoleCursorPosition(GetStdHandle( STD_OUTPUT_HANDLE ),coord);
}
int main()
{
    int size;
    int row;
    int col;
    size = 3;
    row = 1;
    col = size/2 +1;

    for(int i=1; i<=size*size; i++)
    {
        gotoxy(col*4, row*2);
        cout<<i;

        if(i % size != 0)
        {
            row--;
            col--;
            if(col < 1)
                col = size;
            if(row < 1)
                row = size;
        }
        else
        {
            row++;
        }
    }

    return 0;
}
