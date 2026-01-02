#ifndef EMPLOYEE_H
#define EMPLOYEE_H
#include <cstdlib>
#include <ctime>
using namespace std;

class Employee {
private:
    int id;
    int salary;
    string name;

public:
    Employee *left, *right;


    Employee() : salary(1000), name(" "), left(nullptr), right(nullptr) {
        id = rand() % 10 + 1;
    }
    Employee(string _name) : salary(1000), name(_name), left(nullptr), right(nullptr) {
        id = rand() % 10 + 1;
    }
    Employee(int _id, int _salary, string _name)
        : id(_id), salary(_salary), name(_name), left(nullptr), right(nullptr) {
    }

    int getId() const {
        return id;
    }
    string getName() const {
        return name;
    }
    int getSalary() const {
        return salary;
    }

    void setId(int _id){
        id = _id;
    }
    void setSalary(int _salary){
        salary = _salary;
    }
    void setName(string _name){
        name= _name;
    }

    void print() const {
        cout << "ID: " << id << " | Name: " << name << " | Salary: " << salary << endl;
    }
};

#endif
