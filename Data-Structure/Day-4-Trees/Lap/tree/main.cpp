#include <iostream>
#include "Employee.h"
#include "Tree.h"

using namespace std;

int main()
{
    srand(time(0));
    BinaryTree t;
    t.insert(5, "ahmed", 1000);
    t.insert(10, "ali", 1000);
    t.insert(2, "mohamed", 1000);
    t.insert(9, "nasser", 1000);
    t.insert(3, "nasser", 1000);

    cout<< "count of leaves: " << t.countLeaves() <<endl;
    t.displayAll();

    Employee* list1 = new Employee(5, 1000, "ahmed");
    list1->left = new Employee(2, 1000, "mohamed");
    list1->left->left = new Employee(3, 1000, "nasser");

    cout << "\n=== Testing Linked List Path ===\n";
    if(t.isSubPath(list1)) {
        cout << "Path [5->2->3] EXISTS in the tree!\n";
    } else {
        cout << "Path [5->2->3] does NOT exist in the tree.\n";
    }

    t.searchById(5);
    t.deleteItem(5);
    t.searchById(5);
    cout << "after delete" << endl;
    t.displayAll();

    return 0;
}
