#include <iostream>

using namespace std;

int main()
{
    int number;


    int *pointToNum = &number;
    cout << "enter number: ";
    cin >> *pointToNum;

    cout<<endl<<"*-----------------------*\n"<<endl;

    cout << "the address of the pointer to number: " << pointToNum << endl;
    cout << "the value of the pointer to number: " << *pointToNum << endl;

    return 0;
}
