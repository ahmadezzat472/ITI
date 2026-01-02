#include <iostream>

using namespace std;

void SwapByValue(int left,int right)
{
    int tmp;
    tmp=left;
    left=right;
    right=tmp;
}
void SwapByAddress(int* left,int* right)
{
    int tmp;
    tmp=*left;
    *left=*right;
    *right=tmp;
}

int main()
{
    int x;
    int y;
    cout<< "enter first number: ";
    cin>> x;

    cout<< "enter second number: ";
    cin>> y;

    cout<<endl<<"*------------------------*\n"<<endl;

    SwapByValue(x,y);
    cout<<"after Swap by value \n";
    cout<<"x= "<<x <<endl;
    cout<<"y= "<<y <<endl;

    cout<<endl<<"*------------------------*\n"<<endl;

    SwapByAddress(&x, &y);
    cout<<"after Swap by addresss \n";
    cout<<"x= "<<x<<endl;
    cout<<"y= "<<y<<endl;

    return 0;
}
