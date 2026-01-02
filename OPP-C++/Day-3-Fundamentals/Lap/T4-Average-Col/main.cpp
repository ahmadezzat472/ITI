#include <iostream>

using namespace std;

int main()
{
    int rows = 3, cols = 4, sum = 0;
    int arr[rows][cols];
    double avg[cols] = {0.0};
    for(int i=0; i<rows; i++){
        for(int j=0; j<cols; j++){
            cout << "enter R#" << i + 1 << " C#" << j + 1 << " : " << endl;
            cin >> arr[i][j];
        }
    }

    for(int j=0; j<cols; j++){

        for(int i=0; i<rows; i++){
                sum += arr[i][j];
        }
        avg[j] = (double)sum / cols;
        sum=0;
    }

    for(int i=0; i<cols; i++){
        cout<< "avg of col#" << i + 1 << " : " << avg[i] <<endl;
    }

    return 0;
}
