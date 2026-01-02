#include <iostream>
using namespace std;

class Queue{
private:
    int counter;
    int teal;
    int head;
    int _size;
    int *arr;

public:
    Queue(){
        teal = head = counter = 0;
        _size = 5;
        arr = new int[_size];
    }

    Queue(int _size){
        teal = head = counter = 0;
        this->_size = _size;
        arr = new int[_size];
    }

    void enQueue(int value){
        if(!isFull()){
            arr[teal] = value;
            teal = (teal + 1) % _size;
            counter++;
        } else {
            cout << "the queue is full" << endl;
        }
    }

    int deQueue(){
        if(!isEmpty()){
            int value = arr[head];
            head = (head + 1) % _size;
            counter--;
            return value;
        } else {
            cout << "the queue is empty" << endl;
            return -123;
        }
    }

    void print(){
        cout << "the queue elements: ";
        int i = head;
        for(int c = 0; c < counter; c++){
            cout << arr[i] << " ";
            i = (i + 1) % _size;
        }
        cout << endl;
    }

    bool isFull(){
        return counter == _size;
    }

    bool isEmpty(){
        return counter == 0;
    }
};

int main()
{
    Queue q;

    q.enQueue(1);
    q.enQueue(2);
    q.enQueue(3);
    q.enQueue(4);
    q.enQueue(5);

    cout << "the dequeue elements: " << endl;
    cout << q.deQueue() << " ,";
    cout << q.deQueue() << " ,";
    cout << q.deQueue() << endl;

    q.print();
    return 0;
}
