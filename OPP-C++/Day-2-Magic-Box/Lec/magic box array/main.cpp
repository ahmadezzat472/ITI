#include <iostream>
using namespace std;

int main() {
    int size;

    do{
        cout << "Enter odd size of magic box: ";
        cin >> size;

        if(size % 2 == 0 || size < 3)
            cout << "Size must be an ODD number and >= 3\n";
    }while(size % 2 == 0 || size < 3);

    int magic[size][size] = {0};

    int row = 0;
    int col = (size / 2);

    for (int i = 1; i <= size * size; i++) {

        magic[row][col] = i;

        if (i % size != 0) {
            row--;
            col--;

            if (row < 0) row = size-1;
            if (col < 0) col = size-1;
        }
        else {
            row++;
        }
    }

    cout << "\nMagic Box (" << size << " x " << size << "):\n\n";

    for (int r = 0; r < size; r++) {
        for (int c = 0; c < size; c++) {
            cout << magic[r][c] << "\t";
        }
        cout << endl;
    }

    return 0;
}
