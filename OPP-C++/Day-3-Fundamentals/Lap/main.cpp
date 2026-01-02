#include <iostream>

using namespace std;

int main()
{
    int m1, n1, m2, n2;

    cout << "Please enter the size of the first matrix: ";
    cin >> m1;
    cin >> n1;
    cout << "Please enter the size of the second matrix: ";
    cin >> m2;
    cin >> n2;

    int arr1[m1][n1];
    int arr2[m2][n2];
    int arr3[m1][n2] = {{0}, {0}, {0}};

    cout << "Enter the Content of the first Matrix: " << endl;
    for (int  i = 0; i < m1; i++)
    {
        for (int j = 0; j < n1; j++)
        {
            cout<<"Enter # at index"<<i<<","<<j<<endl;
            cin>>arr1[i][j];
        }
    }

    cout << "Enter the Content of the second Matrix: " << endl;
    for (int  i = 0; i < m2; i++)
    {
        for (int j = 0; j < n2; j++)
        {
            cout<<"Enter # at index"<<i<<","<<j<<endl;
            cin>>arr2[i][j];
        }
    }

    for (int i = 0; i < m1; i++) {
        for (int j = 0; j < n2; j++) {
            for (int k = 0; k < n1; k++) {
            arr3[i][j] = arr1[i][k] * arr2[k][j] + arr1[i][k] * arr2[k][j];
            }
        }
    }

    cout << "Result matrix:\n";
    for (int i = 0; i < m1; i++) {
        for (int j = 0; j < n2; j++)
            cout << arr3[i][j] << " ";
        cout << endl;
    }

    return 0;
}
