#pragma once
#include <iostream>
#include "Node.h"
using namespace std;

template <typename T>
class LinkedList {
private:
    int size;
    Node<T>* tail;
    Node<T>* head;

    void swapData(Node<T>* a, Node<T>* b) {
        T temp = a->data;
        a->data = b->data;
        b->data = temp;
    }

public:
    LinkedList() : size(0), tail(nullptr), head(nullptr) {}

    ~LinkedList() {
        clear();
    }

    bool isEmpty() const {
        return head == nullptr;
    }

    int getSize() const {
        return size;
    }

    void insertFirst(const T& item) {
        Node<T>* newNode = new Node<T>(item);
        if (isEmpty()) {
            head = tail = newNode;
        } else {
            newNode->next = head;
            head->prev = newNode;
            head = newNode;
        }
        size++;
    }

    void append(const T& item) {
        Node<T>* newNode = new Node<T>(item);
        if (isEmpty()) {
            head = tail = newNode;
        } else {
            newNode->prev = tail;
            tail->next = newNode;
            tail = newNode;
        }
        size++;
    }

    void insertBefore(const T& targetItem, const T& newItem) {
        Node<T>* target = search(targetItem);
        if (!target) {
            cout << "Item Not Found!\n";
            return;
        }
        if (target == head) {
            insertFirst(newItem);
            return;
        }
        Node<T>* newNode = new Node<T>(newItem);
        Node<T>* prevNode = target->prev;
        newNode->next = target;
        newNode->prev = prevNode;
        prevNode->next = newNode;
        target->prev = newNode;
        size++;  // FIXED: Changed from listSize to size
    }

    Node<T>* search(const T& item) {
        Node<T>* temp = head;
        while (temp != nullptr) {
            if (temp->data == item)
                return temp;
            temp = temp->next;
        }
        return nullptr;
    }

    void remove(const T& item) {
        Node<T>* target = search(item);
        if (!target) {
            cout << "Item Not Found!\n";
            return;
        }
        if (target == head && target == tail) {
            head = tail = nullptr;
        }
        else if (target == head) {
            head = head->next;
            head->prev = nullptr;
        }
        else if (target == tail) {
            tail = tail->prev;
            tail->next = nullptr;
        }
        else {
            target->prev->next = target->next;
            target->next->prev = target->prev;
        }
        size--;  // FIXED: Changed from listSize to size
        delete target;
    }

    void display() const {
        Node<T>* temp = head;
        while (temp != nullptr) {
            cout << temp->data << " ";
            temp = temp->next;
        }
        cout << "\n";
    }

    // Insertion sort
    void sortListV1() {
        if (isEmpty() || head == tail) return;
        Node<T>* current = head->next;
        while (current != nullptr) {
            Node<T>* comp = current->prev;
            while (comp != nullptr && comp->data > current->data) {
                swapData(comp, current);  // FIXED: Now swapData is defined
                current = comp;
                comp = comp->prev;
            }
            current = current->next;
        }
    }

    // Selection sort
    void sortListV2() {
        Node<T>* current = head;
        while (current) {
            Node<T>* minNode = current;
            Node<T>* nextNode = current->next;
            while (nextNode) {
                if (nextNode->data < minNode->data) {
                    minNode = nextNode;
                }
                nextNode = nextNode->next;
            }
            if (minNode != current)
                swapData(minNode, current);  // FIXED: Now swapData is defined
            current = current->next;
        }
    }

    void clear() {
        Node<T>* current = head;
        while (current != nullptr) {
            Node<T>* next = current->next;
            delete current;
            current = next;
        }
        head = tail = nullptr;
        size = 0;  // FIXED: Changed from listSize to size
    }

    // Getters
    Node<T>* getHead() const {
        return head;
    }

    Node<T>* getTail() const {
        return tail;
    }
};
