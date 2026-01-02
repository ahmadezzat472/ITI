#include <iostream>
#include <cstring>
using namespace std;

int main()
{
    char name[15], temp;
    cout<<"Enter word: " <<endl;
    gets(name);
    int length = strlen(name);

    for(int i=0,j=length-1; i<length/2; i++, j--){
        temp = name[i];
        name[i] = name[j];
        name[j] = temp;
    }

    puts(name);
    return 0;
}
