#include <iostream>
#include <stdlib.h>
#include <windows.h>
using namespace std;

void gotoxy(int column, int row)
{
    COORD coord;
    coord.X = column;
    coord.Y = row;
    SetConsoleCursorPosition(GetStdHandle(STD_OUTPUT_HANDLE), coord);
}

int main()
{
    int size;

    do
    {
        cout << "Please enter an odd magic box size greater than 1: ";
        cin >> size;

        if (size <= 1 || size % 2 == 0)
        {
            system("cls");
            cout << "Invalid input!\n";
        }

    } while (size <= 1 || size % 2 == 0);

    system("cls");

    int row = 1;
    int col = size / 2 + 1;

    for (int i = 1; i <= size * size; i++)
    {
        gotoxy(col * 4, row * 2);
        cout << i;

        if (i % size != 0)
        {
            row--;
            col--;
            if (col < 1)
                col = size;
            if (row < 1)
                row = size;
        }
        else
        {
            row++;
        }
    }

    // Keep console open
    gotoxy(0, size * 2 + 2);
    cout << "\n\nPress any key to exit...";
    system("pause>nul");

    return 0;
}
