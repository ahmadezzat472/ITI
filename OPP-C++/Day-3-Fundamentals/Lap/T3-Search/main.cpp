#include <iostream>

using namespace std;

int main()
{
    int arr_size = 5, key, index;
    int my_numbers[arr_size];
    cout << "enter the search Number: " << endl;
    cin>> key;
    cout << "plz enter the numbers of arrays: " << endl;
    for(int i=0; i<arr_size; i++){
        cout << "enter #" << i + 1 << ": ";
        cin >> my_numbers[i];
        if(my_numbers[i] == key){
            index = i;
            break;
        }
    }

    cout << "the index of Number is: " << index + 1;

    return 0;
}
