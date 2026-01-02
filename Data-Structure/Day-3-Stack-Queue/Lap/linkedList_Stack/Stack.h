#ifndef STACK_H
#define STACK_H
#include "LinkedList.h"

class Stack {
private:
    LinkedList list;

public:
    bool isEmpty() {
        return list.isEmpty();
    }

    void push(Employee* e) {
        list.append(e);
    }

    Employee* peek() {
        return list.getFirst();
    }

    Employee* pop() {
        return list.removeLast();
    }

    int size() {
        return list.listSize;
    }
};

#endif
