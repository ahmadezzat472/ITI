#include <iostream>

using namespace std;

int add(int n1, int n2){
    return n1 + n2;
}

int sub(int n1, int n2){
    return n1 - n2;
}

int multipication(int n1, int n2){
    return n1 * n2;
}

int divide(int n1, int n2){
    return n1 / n2;
}

int main()
{
    int x,y,z;
    char operation, Continue;


    do{
        cout<<"plz enter first number: ";
        cin>> x;
        cout<<"plz enter second number: ";
        cin>> y;
        do {
            cout <<"plz enter operation: ";
            cin >> operation;

            if(y<=0 && operation == '/')
                cout<<"invalid number"<<endl;
        } while(y <= 0 && operation == '/');


        switch(operation)
        {
            case '+':
                cout<< add(x,y) <<endl;
                break;
            case '-':
                cout<< sub(x,y) <<endl;
                break;
            case '/':
                 cout<< divide(x,y) <<endl;
                break;
            case '*':
                cout<< multipication(x,y) <<endl;
                break;
            default:
                cout<< "invalid operation"<< endl;
        }
        cout<< "Continue ??? y or n" <<endl;
        cin>> Continue;
    } while(Continue == 'y');

    return 0;
}
