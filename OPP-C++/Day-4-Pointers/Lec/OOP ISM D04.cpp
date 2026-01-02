//string
//struct
//pointer
//pointer to struct
///////////////////////////////////////////////
//no dt called string
//use string as array of characters
//char name[14+1];
//cin>>name; //Ali OsamaENTER   //|a|l|i|\0|||
//cout<<name; //print till \0
//<string.h>
//gets(name);
//puts(name);
//////////////////////////////////////////
//string.h library
//gets(array of characters);
//puts(array of characters);
//strcpy(Larrayofcharacters,Rarrayofcharacters);
//strcat(Larrayofcharacters,Rarrayofcharacters);
//strcmp(Larrayofcharacters,Rarrayofcharacters); //ascii
//strcmpi(Larrayofcharacters,Rarrayofcharacters); //ascii
//strlen(Larrayofcharacters);  //\0
//atoi(Larrayofcharacters);
//atof(Larrayofcharacters);
///////////////////////////////////////////
int main()
{
    char fname[15]="Ali";//{a,l,i} //5,y,\0
    char lname[15]="Osama";
    char fullName[30];

    strcpy(fullName,fname);
    strcat(fullName," ");
    strcat(fullName,lname);
    // fullName[0]=fname[0];
    // fullName[1]=fname[1];
    // fullName[2]=fname[2];
    // fullName[3]=' ';
    // fullName[4]=lname[0];
    // fullName[5]=lname[1];

    char num[10]="22";
    int x=atoi(num);
    return 0;
}
////////////////////////////////////////////////
//store grade of 5 subjects for 20 stds
///100 variables ??? XXX
///1D array 20 variables
///2D Array  1 Variable

///STORING DATA FOR THE SAME DATA TYPE

/////issue
///store data for Employee
///int ssn
///char name[20]
///int age
///float salary

///??Question => Use Array???NO

//////////////////////////////////////////
//struct:
//>data type with my own definitions
//>data type can carry several unrelated datatypes

//struct is written in global declaration

//syntax

struct DTName
{
    id;
    name;
    _age;
    salary;
};

//DTName -> 
//1-fst ltr must be uppercase
//2-must represent one [singularize]
///xxxxx struct employees,Employees,People
//////T   Employee,Department,Person

//Data inside struct
//1- fst ltr must be lower case or _ _id,id
//2- fullName

////////////////////////////////////////////

//#include<>
using namespace std;

struct Employee
{
    int id;
    char name[18];
    int age;
    float salary;
};

void PrintEmployee(Employee param)
{
    cout<<"id="<<param.id<<endl;
    cout<<"name="<<param.name<<endl;
    cout<<"age="<<param.age<<endl;
    cout<<"salary="<<param.salary<<endl;
}
int main()
{
    //variable from Employee
    Employee e1;  //30B
    Employee e2;  //30B

    e1.id=1;
    strcpy(e1.name,"Sara");
    e1.age=22;
    e1.salary=1234;

    cout<<"Enter id\n";
    cin>>e1.id;
    cout<<"Enter name\n";
    cin>>e1.name;
    gets(e1.name);
    cout<<"Enter age\n";
    cin>>e1.age;
    cout<<"Enter salary\n";
    cin>>e1.salary;

    // cout<<e1.id;
    // puts(e1.name);
    // cout<<e1.age;
    // cout<<e1.salary;

    // cout<<e2.id;
    // puts(e2.name);
    // cout<<e2.age;
    // cout<<e2.salary;


    PrintEmployee(e1);  //pass VALUESSSSS
    PrintEmployee(e2);  //
    return 0;
}

//////////////////////////////////////////
//pointer

int main()
{
    int x=10;
    return 0;
}

//if i want variable carry address of x
//thats called pointer


//pointer:
//variable carries address of another
//variable in memory


//declare pointer
DTName *pointerName;

//pointer to int
int main()
{
    int x=10;


    //declare pointer carries address of int variable
    int *ptr; //ptr|NULL|
    return 0;
}

//pointer to int and assign it
int main()
{
    int x=55;

    int *ptr;

    //ptr=x; //No Error //Logic error will cause runtime error later

    ptr=&x;
}

////////////////////////////////////////
//pointer to int then access it via pointer
int main()
{
    int x=10;

    int *ptr=&x;

    x=100;

    *ptr=100;
    //access variable that pointer points at

    cout<<x;
    cout<<*ptr;
    return 0;
}

int main()
{
    double y=1.2;

    double * dPtr=&y;

    *dPtr=3.4;
    cout<<*dPtr;

    return 0;
}

////////////////////////////////////////
int main()
{
    int x=10;
    int *ptr=&x;

    cout<<x;
    cout<<&x;

    cout<<ptr;
    cout<<&ptr;
    cout<<*ptr;
    
    
    cout<<*x; //compile Error
}

////////////////////////////////////
//size of pointer
int main()
{
    int *ptr;   //4or8B
    double *dPtr; //4or8B
    char *cPtr;  //4or8B

    cout<<sizeof(int *); 
    cout<<sizeof(dPtr); 
}

//////////////////////////////////////////
//WRONG
int main()
{
    float y=1.2;

    int *ptr=&y; //No Error

    // int x=1;
    // printf("%i %i %i",x++,++x,x++);
}
//////////////////////////////////////////////
///arithmatic operations on pointer
int main()
{
    int x=10;
    int *ptr=&x;
    ptr++;

    double y=1;
    double *dPtr=&y;
    y++;

}

////////////////////////////////////////////////
//General purpose pointer GPP
//dynamic allocation

int main()
{
    int x=10;

    void * ptr;

    cout<<sizeof(void*); //4 or 8
    cout<<sizeof(ptr); //4 or 8

    ptr=&x;

    cout<<ptr;
    cout<<&ptr;
    cout<<*ptr; //compile error

    //void * cannt be incremented
    //ptr++;

}


////////////////////////////////////////////
//pointer to array

int main()
{
    int arr[5]={1,2,3,4,5};
    int *ptr;

    //make ptr carries address fst element of array
    ptr=arr[0]; //F
    ptr=&arr[0]; //T
    ptr=arr;    //T 
    ptr=&arr;    //T 

    //recommended
    ptr=arr;


    //fill array with 3 ways
    //v3 [recommended]
    //when pointer points array
    //it acts like array [indexer]
    for (int i = 0; i < 5; i++)
    {
        cout<<"enter #\n";
        cin>>ptr[i];
    }
    for (int i = 0; i < 5; i++)
    {
        cout<<" #=\t"<<ptr[i];
    }
     
    //v2 
    *(ptr+0)=10;
    *(ptr+1)=20;
    *(ptr+2)=30;
    *(ptr+3)=40;
    *(ptr+4)=50;
    cout<<*(ptr+0);

    //v1
    *ptr=10;
    ptr++;
    *ptr=10;
    ptr++;
    *ptr=10;
    ptr++;
    *ptr=10;
    ptr++;
    *ptr=10;
    ptr++;
    //REMEMBER
    ptr=arr;
    cout<<*ptr;
    ptr++;
    cout<<*ptr;
    ptr++;
    cout<<*ptr;
    ptr++;
    cout<<*ptr;
    ptr++;
    cout<<*ptr;
    ptr++;
    //REMEMBER
    ptr=arr;
}


//////////////////////////////////
//arr is constant pointer
int main()
{
    int arr[5];

    *(arr+0)=10;
    *(arr+1)=10;
    *(arr+2)=10;
    *(arr+3)=10;
    *(arr+4)=10;

    //WRONG
    *arr=10;
    //arr++; //compile error constant address

    arr[0]=10;
    

}

//////////////////////////////////////////////
//pointer to array of characters
int main()
{
    char name[15];

    char *cPtr=name;

    //
    *cPtr='a';
    cPtr++;
    *cPtr='l';
    cPtr++;
    *cPtr='i';
    cPtr++;
    *cPtr='\0';
    //cPtr++;
    cPtr=name;

    //
    *(cPtr+0)='A';
    *(cPtr+1)='l';
    *(cPtr+2)='i';
    *(cPtr+3)='\0';

    //
    cPtr[0]='A';
    cPtr[0]='l';
    cPtr[0]='i';
    cPtr[0]='\0';

    //
    cin>>cPtr;
    cout<<cPtr;

    //
    gets(cPtr);
    puts(cPtr);
}

////////////////////////////////////////
//pointer to pointer to int

int main()
{
    int x=10;

    int *ptr=&x;

    int **ptrToPtr=&ptr;

    cout<<x;
    cout<<&x;
    cout<<*x;
    cout<<ptr;
    cout<<&ptr;
    cout<<*ptr;
    cout<<ptrToPtr;
    cout<<&ptrToPtr;
    cout<<*ptrToPtr;
    cout<< **ptrToPtr;  //10
}

//WRONG

int main()
{
    int x=10;

    int *ptr=&x;

    int *ptrToPtr=&ptr;

    cout<<x;
    cout<<&x;
    cout<<*x;
    cout<<ptr;
    cout<<&ptr;
    cout<<*ptr;
    cout<<ptrToPtr;
    cout<<&ptrToPtr;
    cout<<*ptrToPtr; //0x10
    cout<< **ptrToPtr;  //10
}


//////////////////////////////////////////
//pointer to struct
struct Employee
{
    int id;
    char name[12];
    int age;
};

int main()
{
    Employee e1;

    Employee *empPtr;

    empPtr=&e1;

    (*empPtr).id=1;
    strcpy((*empPtr).name,"Sara");
    (*empPtr).age=22;


    //-> arrow operator [exclusive with ptr to struct]
    (*empPtr).id=1;
    empPtr->id=1;

    strcpy((*empPtr).name,"Sara");
    strcpy(empPtr->name,"Sara");

    empPtr->age=22;

    return 0;
}

//////////////////////////////////////////////

void SwapV(int left,int right)
{
    int tmp;
    tmp=left;
    left=right;
    right=tmp;
}
void SwapA(int* left,int* right)
{
    int tmp;
    tmp=*left;
    *left=*right;
    *right=tmp;
}
int main()
{
    int x=3,y=5;
    cout<<"Before Swap\n";
    cout<<"x="<<x<<endl; //3
    cout<<"y="<<y<<endl; //5
    //SwapV(x,y);  //pass VALUESSSS
    SwapA(&x,&y);  //pass Addresses
    cout<<"After Swap\n";
    cout<<"x="<<x<<endl;
    cout<<"y="<<y<<endl;
}


///////////////////////////////////////
//pass array to fn

//NOT STANDARD
void PrintArray(int param[5])
void PrintArray(int param[],int _size)
{
    for (int i = 0; i < _size; i++)
    {
        cout<<param[i];
    }
}
//standard
void PrintArray(int *param,int _size)
{
    for (int i = 0; i < _size; i++)
    {
        cout<<param[i];
    }    
}

int* TryMe()
{
    static int result[5]={1,2,3,4,5};
    return result;
}

int main()
{
    int arr[5]={1,2,3,4,5};
    PrintArray(arr,5);


    int *ptr=TryMe();  //0x10 [withot static] [undefined address]
    ptr[0]=1000;
}


////////////////////////////////////////////
//Lab Assignments
//1- pointer to integer  read & write
//2- pointer to array  read and write   3 ways
//3- pointer to pointer of integer Write ONLY
//4- pass by value/address    swap
//5- pass array as input param []   ,pass pointer
//6- return [] as return type[not supported][compiler error]
    //and return pointer as a return type

//7- pointer to struct of employee   ->

//8- fname, lname -> fullname




