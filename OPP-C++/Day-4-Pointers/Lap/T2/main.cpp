#include <iostream>

using namespace std;

int main()
{
    int sizeArr = 3;
    int arr[sizeArr];
    int *pArr = arr;

    for(int i =0; i<sizeArr; i++){
        cout<<"enter num #"<<i+1 <<" : ";
        cin>> pArr[i];
    }

    cout<< "------------------------" <<endl;

    for(int i =0; i<sizeArr; i++){
        cout<<"the num #"<<i+1 <<"is : " << pArr[i] <<endl;
    }

    cout<< "------------------------" <<endl;

    for(int i =0; i<sizeArr; i++){
        cout<<"the num #"<<i+1 <<"is : " << *(pArr+i) <<endl;
    }

    cout<< "------------------------" <<endl;

    for(int i =0; i<sizeArr; i++){
        cout<<"the num #"<<i+1 <<"is : " << *pArr++ <<endl;
    }
    pArr = arr;

    return 0;
}
