#ifndef CIRCULARLINKEDLIST_H
#define CIRCULARLINKEDLIST_H
#include "Employee.h"

inline void swapEmpCirc(Employee* a, Employee* b){
    int tempId = a->getId();
    string tempName = a->getName();
    int tempSalary = a->getSalary();

    a->setId(b->getId());
    a->setName(b->getName());
    a->setSalary(b->getSalary());

    b->setId(tempId);
    b->setName(tempName);
    b->setSalary(tempSalary);
}

class CircularLinkedList {
public:
    int listSize;
    Employee* head;
    Employee* tail;

    CircularLinkedList() {
        listSize = 0;
        head = nullptr;
        tail = nullptr;
    }

    bool isEmpty() {
        return head == nullptr;
    }

    void insertFirst(Employee* e) {
        if (isEmpty()){
            head = tail = e;
            head->prev = head->next = head;
        }
        else {
            e->next = head;
            e->prev = tail;
            tail->next = e;
            head->prev = e;
            head = e;
        }
        listSize++;
    }

    void append(Employee* e) {
        if (isEmpty()) {
            head = tail = e;
            head->next = head;
            head->prev = head;
        } else {
            e->prev = tail;
            e->next = head;
            tail->next = e;
            head->prev = e;
            tail = e;
        }
        listSize++;
    }


   Employee* search(int id) {
    if (isEmpty()) return nullptr;
    Employee* temp = head;
    do {
        if (temp->getId() == id) return temp;
        temp = temp->next;
    } while (temp != head);
    return nullptr;
    }


    void insertBefore(int itemId, Employee* e) {
        Employee* target = search(itemId);
        cout<< endl << target->getId();

        if (!target)
        {
            cout << "Employee ID Not Found!\n";
            return;
        }

        if (target == head)
        {
            insertFirst(e);
            return;
        }

        Employee* prevNode = target->prev;

        e->next = target;
        e->prev = prevNode;

        prevNode->next = e;
        target->prev = e;
    }

    void remove(int id) {
        Employee* target = search(id);
        if (!target)
        {
            cout << "Employee ID Not Found!\n";
            return;
        }

        if (target == head && target == tail)
        {
            head = tail = nullptr;
        }
        else if (target == head)
        {
            head = head->next;
            head->prev = tail;
            tail->next = head;
        }
        else if (target == tail)
        {
            tail = tail->prev;
            tail->next = head;
            head->prev = tail;
        }
        else
        {
            target->prev->next = target->next;
            target->next->prev = target->prev;
        }
        listSize--;
        delete target;
    }

    void display() {
        if (isEmpty()) return;
        Employee* temp = head;
        do {
            cout << "ID: " << temp->getId()
                 << " | Name: " << temp->getName()
                 << " | Salary: " << temp->getSalary() << endl;
            temp = temp->next;
        } while (temp != head);
        cout << endl;
    }

   void sortListV1() {
        if (isEmpty() || head->next == head)
            return;
       Employee* current = head->next;
        do {
            Employee* comp = current->prev;

            while (comp != tail && comp->getId() > current->getId()) {
                swapEmpCirc(comp, current);
                current = comp;
                comp = comp->prev;
            }

            current = current->next;
        } while (current != head);
    }
};

#endif

