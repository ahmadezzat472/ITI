#include <iostream>
using namespace std;

class Employee {
private:
    static int idCounter;
    int id;
    int salary;

public:
    Employee() : salary(1000){
        id = ++idCounter;
    }
    Employee(int _salary) : salary(_salary){
        id = ++idCounter;
    }
    Employee(const Employee& oldObj){
        id = ++idCounter;     // new object → new ID
        this->salary = oldObj.salary;
    }

    int getSalary() const {
        return salary;
    }
    void setSalary(int _salary){
        salary = _salary;
    }

    bool operator<(const Employee& right) const {
        return this->salary < right.salary;
    }

};

void insertion(Employee *arr, int n){
    for(int i = 0; i< n-1; i++){
        Employee key = arr[i+1];
        int j;
        for(j=i+1; (j>0 && key < arr[j-1] ); j--)
            arr[j] = arr[j-1];
        arr[j] = key;
    }
}

void display(Employee *empArray, int arrSize){
     for(int i=0;i<arrSize;i++)
        cout << empArray[i].getSalary() << " ";
    cout << endl;
}

int Employee::idCounter = 0;

int main()
{
    Employee empArray[4] = {Employee(500), Employee(100), Employee(5000), Employee(1500)};
    cout << "before Sort: " << endl << "-------------------" << endl;
    display(empArray, 4);
    insertion(empArray, 4);
    cout << endl << "after Sort: " << endl << "-------------------" << endl;
    display(empArray, 4);

    return 0;
}
