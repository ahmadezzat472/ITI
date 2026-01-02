#ifndef EMPLOYEE_H
#define EMPLOYEE_H
#include <string>
using namespace std;

class Employee {
private:
    static int idCounter;
    int id;
    string name;
    int salary;

public:
    Employee* next;
    Employee* prev;

    Employee(string _name, int _salary) {
        idCounter++;
        id = idCounter;
        name = _name;
        salary = _salary;
        next = nullptr;
        prev = nullptr;
    }

    int getId() const {
        return id;
    }
    int getSalary() const {
        return salary;
    }
    string getName() const {
        return name;
    }

    void setId(int _id){
        id = _id;
    }
    void setSalary(int _salary){
        salary = _salary;
    }
    void setName(string _name){
        name = _name;
    }

    bool operator<(const Employee& right) const {
        return this->salary < right.salary;
    }

    bool operator==(const Employee& right) const {
        return this->name == right.name;
    }
};
#endif


