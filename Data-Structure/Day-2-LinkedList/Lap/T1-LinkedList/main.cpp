#include <iostream>
#include "Employee.h"
#include "LinkedList.h"
#include "CircularLinkedList.h"
using namespace std;

int Employee::idCounter = 0;

int main() {
    CircularLinkedList list;

    list.append(new Employee("Ahmed", 5000));
    list.append(new Employee("Ali", 6000));
    list.append(new Employee("mohamed", 4000));
    list.insertFirst(new Employee("Sara", 7000));

    cout << "Initial List:\n";
    list.display();

    cout << "\nAfter insertBefore(3):\n";
    list.insertBefore(1, new Employee("NewEmployee", 4500));
    list.display();

    cout << "\nAfter Sort:\n";
    list.sortListV1();
    list.display();

    list.remove(2);
    cout << "\nAfter delete(2):\n";
    list.display();

    return 0;
}
