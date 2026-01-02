#ifndef EMPLOYEE_H
#define EMPLOYEE_H
#include <iostream>
#include <cstdlib>
#include <ctime>
#include <string>
using namespace std;

class Employee {
private:
    int id;
    int salary;
    string name;

public:
    Employee *left, *right;
    Employee *next, *prev;  // For linked list (if needed)

    // Constructors
    Employee() : salary(1000), name(" "), left(nullptr), right(nullptr),
                 next(nullptr), prev(nullptr) {
        id = rand() % 10 + 1;
    }

    Employee(string _name) : salary(1000), name(_name), left(nullptr),
                             right(nullptr), next(nullptr), prev(nullptr) {
        id = rand() % 10 + 1;
    }

    Employee(int _id, int _salary, string _name)
        : id(_id), salary(_salary), name(_name), left(nullptr),
          right(nullptr), next(nullptr), prev(nullptr) {
    }

    // Getters
    int getId() const {
        return id;
    }

    string getName() const {
        return name;
    }

    int getSalary() const {
        return salary;
    }

    // Setters
    void setId(int _id) {
        id = _id;
    }

    void setSalary(int _salary) {
        salary = _salary;
    }

    void setName(string _name) {
        name = _name;
    }

    void print() const {
        cout << "ID: " << id << " | Name: " << name << " | Salary: " << salary << endl;
    }

    // ============ COMPARISON OPERATORS ============

    // Equality operator: checks if two employees are equal (based on ID)
    bool operator==(const Employee& other) const {
        return id == other.id;
    }

    // Not equal operator
    bool operator!=(const Employee& other) const {
        return id != other.id;
    }

    // Less than operator: for sorting (employee with smaller ID comes first)
    bool operator<(const Employee& other) const {
        return id < other.id;
    }

    // Greater than operator
    bool operator>(const Employee& other) const {
        return id > other.id;
    }

    // Less than or equal
    bool operator<=(const Employee& other) const {
        return id <= other.id;
    }

    // Greater than or equal
    bool operator>=(const Employee& other) const {
        return id >= other.id;
    }

    // ============ OUTPUT OPERATOR ============

    // Friend function: allows cout << employee
    friend ostream& operator<<(ostream& os, const Employee& emp) {
        os << "ID: " << emp.id << " | Name: " << emp.name
           << " | Salary: " << emp.salary;
        return os;
    }
};

#endif
