#include <iostream>
using namespace std;

class Queue{
private:
    int teal;
    int head;
    int _size;
    int *arr;

public:
    Queue(){
        teal = head = 0;
        _size = 5;
        arr = new int[_size];
    }

    Queue(int _size){
        teal = head = 0;
        this->_size = _size;
        arr = new int[_size];
    }

    void enQueue(int value){
        if(!isFull()){
            arr[teal] = value;
            teal++;
        } else
            cout << "the queue is full" << endl;
    }

    int deQueue(){
        if(!isEmpty()){
            int value = arr[head];
            for(int i=head; i<teal-1; i++){
                arr[i] = arr[i+1];
            }
            teal--;
            return value;
        } else {
            cout << "the queue is empty" << endl;
            return -123;
        }
    }

    void print(){
        cout << "the queue elements: " << endl;
        for(int i=0; i<teal; i++)
            cout << arr[i] << " ";
        cout  << endl;
    }

     bool isFull(){
        return _size == teal;
    }

    bool isEmpty(){
        return teal == head;
    }
};

int main()
{
    Queue q;

    cout << q.deQueue() << " ,";

    q.enQueue(1);
    q.enQueue(2);
    q.enQueue(3);
    q.enQueue(4);
    q.enQueue(5);

    //q.enQueue(5);

    cout << "the dequeue elements: " << endl;
    cout << q.deQueue() << " ,";
    cout << q.deQueue() << " ,";
    cout << q.deQueue() << endl;

    q.print();
    return 0;
}
