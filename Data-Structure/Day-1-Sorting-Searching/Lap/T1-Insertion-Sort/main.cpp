#include <iostream>
using namespace std;

// Swap-Based
void insertion_v1(int *arr, int n){
    for(int i = 0; i< n-1; i++){
        for(int j=i+1; j>0; j--){
            if(arr[j] < arr[j-1]){
                int temp = arr[j];
                arr[j] = arr[j-1];
                arr[j-1] = temp;
            } else {
                break;
            }
        }
    }
}

// Shift-Based (Better)
void insertion_v2(int *arr, int n){
    for(int i = 0; i< n-1; i++){
        int key = arr[i+1];
        int j;
        for(j=i+1; (j>0 && key < arr[j-1] ); j--)
            arr[j] = arr[j-1];
        arr[j] = key;
    }
}

int main()
{
    int n = 8;
    int arr[n] = {5,1,500,3,0,9,8,4};
    insertion_v2(arr, n);

    for(int i = 0; i< n; i++){
        cout<<arr[i] <<endl;
    }
    return 0;
}
