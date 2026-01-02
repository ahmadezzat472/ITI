#include "Stack.h"
#include "Employee.h"
#include <iostream>
using namespace std;

int Employee::idCounter = 0;


int main() {
    Stack st;

    st.push(new Employee("Ahmed", 5000));
    st.push(new Employee("Ali", 6000));
    st.push(new Employee("Sara", 7000));

    cout << "Top = " << st.peek()->getName() << endl;

    Employee* e = st.pop();
    cout << "Popped = " << e->getName() << endl;
    delete e;

    cout << "New Top = " << st.peek()->getName() << endl;
}
