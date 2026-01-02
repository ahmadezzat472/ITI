#include <iostream>

using namespace std;

int main()
{
    int x = 10;

    int *p1 = &x;
    cout << "the value of the pointer to number: " << *p1 << endl;

    int **p2 = &p1;
    cout << "the value of the pointer to number: " << **p2 <<endl;

    return 0;
}
