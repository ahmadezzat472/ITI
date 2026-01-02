#ifndef LINKEDLIST_H
#define LINKEDLIST_H
#include "Employee.h"

class LinkedList {
public:
    Employee* first;
    Employee* last;
    int listSize;

    LinkedList(){
    first = last = nullptr;
    listSize = 0;
    }

    bool isEmpty() {
        return first == nullptr;
    }

    void insertFirst(Employee* e) {
    if (isEmpty()){
        first = last = e;
    }
    else {
        e->next = first;
        first->prev = e;
        first = e;
    }
    listSize++;
    }

    void append(Employee* e) {
    if (isEmpty()) {
        first = last = e;
    }
    else {
        last->next = e;
        e->prev = last;
        last = e;
    }
    listSize++;
    }

    Employee* listSearch(int id){
    Employee* current = first;
    while(current != nullptr || current->next != nullptr){
        if(current->getId() == id)
            return current;
        current = current->next;
    }
    return nullptr;
    }

    void removeById(int id) {
        Employee* target = listSearch(id);
        if (!target)
        {
            return;
        }

        if (target == last)
        {
            first = last = nullptr;
        }
        else if (target == first)
        {
            first = first->next;
            first->prev = nullptr;
        }
        else if (target == last)
        {
            last = last->prev;
            last->next = nullptr;
        }
        else
        {
            target->prev->next = target->next;
            target->next->prev = target->prev;
        }
        listSize--;
        delete target;
    }

       Employee* getFirst() {
        return last;
    }

    Employee* removeLast() {
    if (isEmpty()) {
        return nullptr;
    }

    Employee* target = last;

    if (first == last) {
        first = last = nullptr;
    }
    else {
        last = last->prev;
        last->next = nullptr;
    }

    target->prev = nullptr;
    target->next = nullptr;

    listSize--;
    return target;
}

};

#endif

