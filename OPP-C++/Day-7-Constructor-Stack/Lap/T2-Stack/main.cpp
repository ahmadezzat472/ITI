#include <iostream>
using namespace std;

class Stack {
private:
    int *arr;
    int _size;
    int top;

public:
    Stack(){
        top = 0;
        _size = 5;
        arr = new int[_size];
        cout << "default constructor" << endl;
    }

    Stack(int _size){
        top = 0;
        this->_size = _size;
        arr = new int[_size];
        cout << "param constructor" << endl;
    }

    ~Stack()
    {
//        for (int i = 0; i < _size; i++)
//        {
//            arr[i]=-1;
//        }
        delete[] arr;
        cout<<"Stack destructor" << endl;
    }

    void push(int value){
        if(isFull())
            cout << "the stack is full" << endl;
        else {
            arr[top] = value;
            top++;
        }
    }

    int pop(){
        int returnValue = -123;
        if(isEmpty())
            cout << "the stack is empty" << endl;
        else {
            top--;
            returnValue = arr[top];
        }
        return returnValue;
    }

    bool isFull(){
        return _size == top;
    }

    bool isEmpty(){
        return top == 0;
    }

    friend void displayStack(Stack param);
};

void displayStack( Stack _stack){
    cout<< "the elements stack: " << endl;
    for(int i=0; i<_stack.top ;i++)
        cout<< _stack.arr[i] << " , ";
    cout << endl;
}

int main()
{
    Stack s1(10);
    s1.push(1);
    s1.push(2);
    s1.push(3);
    s1.push(4);

    displayStack(s1); //runs successfully
    cout << endl << "-----------------" << endl;
    displayStack(s1);
    return 0;
}
