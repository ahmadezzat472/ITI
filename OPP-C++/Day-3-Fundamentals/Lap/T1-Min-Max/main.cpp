#include <iostream>
using namespace std;

int main()
{
    int arr_size = 5, minn, maxx;
    int my_numbers[arr_size];
    cout << "plz enter the numbers of arrays: " << endl;
    for(int i=0; i<arr_size; i++){
        cout << "enter #" << i + 1 << ": ";
        cin >> my_numbers[i];
        if(i == 0)
            minn = maxx = my_numbers[i];
        else{
            if(my_numbers[i] > maxx)
                maxx = my_numbers[i];
            if(my_numbers[i] < minn)
                minn = my_numbers[i];
        }
    }

    cout << "the min number is: " << minn <<endl;
    cout << "the max number is: " << maxx <<endl;


    return 0;
}
