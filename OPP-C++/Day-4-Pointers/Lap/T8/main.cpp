#include <iostream>
#include <string.h>
using namespace std;

int main()
{
    char fname[15]="ahmed";
    char lname[15]="ezzat";
    char fullName[30];

    strcpy(fullName,fname);
    strcat(fullName," ");
    strcat(fullName,lname);

    cout<<"the full name is: " <<fullName<<endl;
    return 0;
}
