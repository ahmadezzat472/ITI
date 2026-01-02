#include <iostream>

using namespace std;

void printArray1(int param[],int _size){
    cout<<"the first way: pass array as []: "<< endl;
    for(int i=0; i<_size; i++){
        cout<<"num #"<<i+1<<" : "<<param[i]<<endl;
    }
}

void printArray2(int *param,int _size){
    cout<<"the second way: pass array as pointer: "<< endl;
    for(int i=0; i<_size; i++){
        cout<<"num #"<<i+1<<" : "<<param[i]<<endl;
    }
}

int main()
{
    int sizeArr = 5;
    int arr[sizeArr]={1,2,3,4,5};

    printArray1(arr, sizeArr);
    cout<<endl<<"*------------------------*\n"<<endl;

    printArray2(arr, sizeArr);
    cout<<endl<<"*------------------------*\n"<<endl;
}
