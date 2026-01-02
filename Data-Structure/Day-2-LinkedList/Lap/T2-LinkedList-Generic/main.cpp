#include <iostream>
#include "LinkedList.h"
#include "Employee.h"
using namespace std;

int main() {
    // Example 1: LinkedList of integers
    cout << "=== Integer LinkedList ===\n";
    LinkedList<int> intList;
    intList.append(5);
    intList.append(2);
    intList.append(8);
    intList.insertFirst(1);
    intList.display();
    intList.sortListV2();
    cout << "After sorting: ";
    intList.display();

    // Example 2: LinkedList of strings
    cout << "\n=== String LinkedList ===\n";
    LinkedList<string> stringList;
    stringList.append("Hello");
    stringList.append("World");
    stringList.insertFirst("Hi");
    stringList.display();

    // Example 3: LinkedList of Employees
    cout << "\n=== Employee LinkedList ===\n";
    LinkedList<Employee> empList;

    Employee e1(101, 5000, "Ahmed");
    Employee e2(102, 6000, "Ali");
    Employee e3(100, 4500, "Mohamed");

    empList.append(e1);
    empList.append(e2);
    empList.insertFirst(e3);

    // Display employees
    Node<Employee>* current = empList.getHead();
    while (current != nullptr) {
        current->data.print();
        current = current->next;
    }

    return 0;
}
