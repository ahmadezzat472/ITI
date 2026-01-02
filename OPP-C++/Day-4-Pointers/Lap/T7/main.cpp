#include <iostream>

using namespace std;

struct Employee
{
    int id;
    char name[12];
    int age;
};

int main()
{
    Employee e1;

    Employee *empPtr;
    empPtr=&e1;

    cout<< "enter the id: " <<endl;
    cin>> (*empPtr).id;

    cout<< "enter the name: " <<endl;
    cin>> empPtr->name;

    cout<< "enter the age: " <<endl;
    cin>> (*empPtr).age;

    cout<<endl<<"*-----------------------*\n"<<endl;
    cout <<"the id id: " <<e1.id<<endl;
    cout <<"the id id: " <<e1.name<<endl;
    cout <<"the id id: " <<e1.age<<endl;


}
