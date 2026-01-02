
/*
 ** cpy ctor [MUST]
 ** =operator [MUST]
 ** Stack Reverse(){}
*/

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

    // copy constructor
    Stack(const Stack& oldObject){
        top = oldObject.top;
        _size = oldObject._size;
        arr = new int[_size];
        for(int i=0; i<_size; i++)
            arr[i] = oldObject.arr[i];
        cout << "copy constructor" << endl;
    }

    ~Stack()
    {
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
    friend Stack Reverse(Stack st);


    void Reverse(){
        int temp;
        for(int i=0, j=top-1; i<top/2; i++,j--){
            temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
    }

    Stack& operator=(const Stack& right){
        delete[] this->arr;
        this->_size = right._size;
        this->top = right.top;
        this->arr = new int[_size];
        for (int i = 0; i < top; i++)
        {
            arr[i]=right.arr[i];
        }
        return *this;
    }

    bool operator==(const Stack& right){
        int counter = 0;
        if(this->top != right.top){
            cout<<"1";
            return false;
        }

        for (int i = 0; i < top; i++)
        {
            for (int j = 0; j < right.top; j++)
                if(arr[i] == right.arr[j])
                    counter++;
            if(counter != 1) return false;
            counter=0;

        }
        return true;
    }


};

void displayStack(Stack _stack){
    cout<< "the elements stack: " << endl;
    for(int i=0; i<_stack.top ;i++)
        cout<< _stack.arr[i] << " , ";
    cout << endl;
}

Stack Reverse(Stack st){
    int temp;
    for(int i=0, j=st.top-1; i<st.top/2; i++,j--){
        temp = st.arr[i];
        st.arr[i] = st.arr[j];
        st.arr[j] = temp;
    }
    return st;

}

int main()
{
//    Stack s1(10);
//    s1.push(1);
//    s1.push(2);
//    s1.push(3);
//    s1.push(4);
//
//    displayStack(s1); //runs successfully
//    cout << endl << "-----------------" << endl;
//    displayStack(s1);
//
//    cout << endl << "-----------------" << endl;
//    s1.Reverse();
//    displayStack(s1);
//        cout << endl << "-----------------" << endl;
//
//    Stack s2 = Reverse(s1);
//    displayStack(s2);

    Stack s1(4);
    s1.push(1);
    s1.push(2);
    s1.push(3);
    s1.push(4);

    Stack s3(5);
    s3.push(4);
    s3.push(10);
    s3.push(3);
    s3.push(1);
    displayStack(s1);
    cout << endl << "-----------------" << endl;

    displayStack(s3);
    cout << (s1==s3) <<endl;

    return 0;
}

