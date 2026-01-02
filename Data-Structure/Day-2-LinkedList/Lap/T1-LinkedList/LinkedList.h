#ifndef LINKEDLIST_H
#define LINKEDLIST_H
#include "Employee.h"

void swapEmp(Employee* a, Employee* b){
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

class LinkedList {
public:
    int listSize;
    Employee* head;
    Employee* tail;

    LinkedList() {
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
        }
        else {
            e->next = head;
            head->prev = e;
            head = e;
        }
        listSize++;
    }

    void append(Employee* e) {
        if (isEmpty()) {
            head = tail = e;
        }
        else {
            tail->next = e;
            e->prev = tail;
            tail = e;
        }
        listSize++;
    }

    Employee* search(int id) {
        Employee* temp = head;
        while (temp != nullptr)
        {
            if (temp->getId() == id)
                return temp;
            temp = temp->next;
        }
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
            head->prev = nullptr;
        }
        else if (target == tail)
        {
            tail = tail->prev;
            tail->next = nullptr;
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
        Employee* temp = head;
        while (temp != nullptr)
        {
            cout << "id: " << temp->getId() << " | name: "
                 << temp->getName() << " | salary "
                 << temp->getSalary() << endl;
            temp = temp->next;
        }
        cout << "\n";
    }

   void sortListV1() {
        Employee* current = head->next;
        while(current != nullptr){
            Employee* comp = current->prev;
            while(comp != nullptr  && comp->getId() > current->getId()){
            swapEmp(comp, current);

            current = comp;
            comp = comp->prev;
            }
            current = current->next;
        }
    }

    void sortListV2() {
        Employee* current = head;
        while (current) {
            Employee* minNode = current;
            Employee* nextNode = current->next;

            while (nextNode) {
                if (nextNode->getId() < minNode->getId()) {
                    minNode = nextNode;
                }
                nextNode = nextNode->next;
            }

            if (minNode != current) swapEmp(minNode, current);
            current = current->next;
        }
    }
};

#endif

