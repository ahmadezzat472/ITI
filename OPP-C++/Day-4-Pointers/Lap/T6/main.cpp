#include <iostream>

using namespace std;

int[] returnArrError(){
    static int arr[5]={1,2,3,4,5};
    return arr;
}

int* returnArr(){
    static int arr[5]={1,2,3,4,5};
    return arr;
}

int main()
{
    int *pArr = returnArr();
    for(int i=0; i<5; i++){
        cout<<"num #"<<i+1<<" : "<<pArr[i]<<endl;
    }
}
