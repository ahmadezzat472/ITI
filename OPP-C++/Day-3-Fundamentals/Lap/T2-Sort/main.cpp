#include <iostream>
using namespace std;

int main()
{
    int arr_size = 5;
    int my_numbers[arr_size];

    cout << "Please enter " << arr_size << " numbers:\n";
    for (int i = 0; i < arr_size; i++) {
        cout << "Enter #" << i + 1 << ": ";
        cin >> my_numbers[i];
    }

    for (int i = 1; i < arr_size; i++) {
        int key = my_numbers[i];
        int j = i - 1;

        while (j >= 0 && my_numbers[j] > key) {
            my_numbers[j + 1] = my_numbers[j];
            j--;
        }

        my_numbers[j + 1] = key;
    }

    cout << "\nSorted numbers:\n";
    for (int i = 0; i < arr_size; i++) {
        cout << "Number #" << i + 1 << ": " << my_numbers[i] << endl;
    }

    return 0;
}
