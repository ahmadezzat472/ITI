//casting
//pointers revision
//dynamic allocation
//recursive function
////////////////////////////////////////////////////////
int main()
{
    int a=1,b=2,c=3,d=4;
    int* ptrarr[4];  //4*4B  or 4*8B
    //put in fst elemt of array address of a
    ptrarr=&a; //F //compile Error LValue
    ptrarr[0]=a; //F
    ptrarr[0]=&a; //T

    *ptrarr=a; //F
    *ptrarr=&a; //T


    //Array default values with array declaration
    int *arr[4]={&a,&b,&c,&d};


    ///array of pointers   |address|address|address|address|
    ///ptrarr itself address fst element of array
    // ptrarr   |add a| add b|add c|add d|
    ptrarr=a; //
    ptrarr=&a;//
    ptrarr[0]=a; //                                   //logic Error cause Runtime error
    ptrarr[0]=&a; //
    ptrarr[1]=&b; //
    ptrarr[2]=&c; //
    ptrarr[3]=&d; //



}

int main()
{
    int arr[4]={1,2,3,4};
    int* ptrArr[4];

    ptrArr=arr; //F   //Compile Erro LValue
    ptrArr[0]=arr; //T
    ptrArr[0]=&arr; //T
    ptrArr[0]=arr[0]; //F
    ptrArr[0]=&arr[0]; //T

    *ptrArr=arr; //T
    *ptrArr=&arr; //T
    *ptrArr=&arr[0]; //T
    ptrArr[1]=arr+1;


    *ptrArr=arr; //RValue
}
/////////////////////////////////////////////
//Casting
///Convert value from data type to another
// data type
//casting
//value of data type can be converted to another one ,,, True
//latest c Versions , this will be done Implicitly
//Implicitly =>compiler will do it itself
//Explicitly => you [developer ] will do it yourself


int main()
{
    int x=22;      //4B   //+-2Billion
    double y=33;   //8B   //444Billion

    // //impilicit casting
    // //safe casting
    // y=x;

    // ////explicit casting [useless]
    // //y=(double)x;

    //implicit casting
    //unsafe casting
    x=y;

    // //Explicit casting
    // x=(int)y;


    printf("%d",x);  //RubbishV
    printf("%lf",y); //444B

}


int main()
{
    int x=3;
    int y=4;
    float z;

    z=x/(float)y;

    printf("%f",z); //0.75

}
//////////////////////////////////////
///promotion
///char->int -> long -> float -> double

int main()
{

    char ch='M'; //77
    int x=3;

    int z=x+/*(int)*/ch;
    printf("%i",z);//80

}

//////////////////////////////////////////
///GPP Pointer

int main()
{
    int x=10;   // x|10| 0x10
    void *ptr=&x;  //ptr|0x10| 0x20

    //printf *ptr  compile Error
    //workaround soln
    //casting  [Implicitly]
    //int* tmpPtr= ptr;
    //casting  [Explicitly] //Useless
    //int* tmpPtr= (int*)ptr;


    //another soln
    //casting [Explicit]
    printf("%i",  *((int*)ptr)   ); //10
}

////////////////////////////////////////////////////
//array of 24 students

//array resized to 25 students=> Impossible

//////////////////////////////////////////////////////////////
//dynamic Allocation

//array => fixed size
/////we cannot declare array
//based on specific/different size in runtime
/////array when declared ,
//cannot be modified or deleted ->end of scope

//RUNTIME
////think to allocate dynamic place in runtime
////based on specific value/size
//think of deallocate this place whenever i want


/////dynamic allocation
///allocate specific value/values in runtime
///based on specific size
////deallocate whenever i want to.
///Stored in Heap  =>c,c++,java,c#

//syntax      HLL===>new
//in c   stdlib.h
/////    int* malloc(size in bytes){code}
//allocate based on size
//then returns address fst byte
//of allocated data as a void*
//////////////////////////////////////////////
#include<stdio.h>
#include<stdlib.h>  //malloc()
int main()
{
    //malloc(16);
    //allocate 16 bytes in heap
    //and return address of fst Byte

    //implicitcast
    //int *ptr=malloc(16);
    //explicit cast [useless]
    int *ptr=(int*)malloc(16);

    char *cptr=malloc(5);

    double *dPtr=(double*)malloc(24);




    //implicit cast

    //explicit cast -> useless  ///this is done impicitly
}

//////////////////////////////////////////
//fullfill places with 4 integer values
int main()
{
    int *ptr=(int*)malloc(16);
    //v1 -> dangerous [don't use]
    *ptr=10;
    ptr++;
    *ptr=20;
    ptr++;
    *ptr=30;
    ptr++;
    *ptr=40;
    ptr++;

    //v2
    *(ptr+0)=10;
    *(ptr+1)=20;
    *(ptr+2)=30;
    *(ptr+3)=40;

    //v3 [RECOMMENDED] when pointer points array, it acts like array [indexer] 
    ptr[0]=10;
    ptr[1]=20;
    ptr[2]=30;
    ptr[3]=40;

    //2 double values
    double *dPtr=(double*)malloc(16);
    dPtr[0]=22;
    //5 characters
    char *cPtr=/*(char*)*/malloc(5);

}

//create 16 characters 
int main()
{
    char *cptr=malloc(16);
    //from this moment char* cptr===char cptr[16]
    *(cptr+0)='H';
    *(cptr+1)='a';
    *(cptr+2)='s';
    *(cptr+3)='h';
    *(cptr+4)='e';
    *(cptr+5)='m';
    *(cptr+6)='\0';

    cptr[0]='H';
    cptr[1]='a';
    cptr[2]='s';
    cptr[3]='H';
    cptr[4]='e';
    cptr[5]='m';
    cptr[6]='\0';

    gets(cptr);
    scanf("%s",cptr);

}

////////////////////////////////////////////////
///Remember when to store integer values
///you must allocate based on its size in bytes CAREFULLY
//int _size
///please enter size of numbers in bytes
//scanf %i  &_size    20
//int *ptr= malloc(_size);









//int _size
///please enter size of numbers
//scanf %i  &_size    5
//int *ptr= malloc(_size * sizeof(int));

int main()
{

    //int *ptr= (int*) malloc(16);
    int _size;
    printf("Enter Array of numbers size\n");
    scanf("%i",&_size);//5
    int *ptr=(int *)malloc(_size * sizeof(int));

    //malloc(_size * sizeof(char));

    //write values in allocated palces
    //v1
    //Very dangerous
    //DON't move and change ptr value in memory
    *ptr=10;
    ptr++;

    //v2  //move ptr without change its value in memory
    *(ptr+0)=10;

    //v3 //most commonly used
    ///when pointer points array , it acts like array [indexer]
    ptr[0]=10;

}

///create array of 5 double values
int main()
{
    int _size;
    printf("Enter Array size\n");
    scanf("%i",&_size);//5
    double * dptr=malloc(_size * sizeof(double) ); 
}

//////////////////////////////////////////
///read data from user in runtime 3 ways No 2 ways
int main()
{
    int _size;
    printf("Enter Array size\n");
    scanf("%i",&_size);//5
    int *ptr=(int *)malloc(_size * sizeof(int));
    //from this moment int*ptr === int ptr[5]
    //v1
    for (int i = 0; i < _size; i++)
    {
        printf("Enter # at index %i\n",i);
        scanf("%i",ptr+i);
    }
    for (int i = 0; i < _size; i++)
    {
        printf("# at index %i=%i\n",i,*(ptr+i));
    }

    //v2
    for (int i = 0; i < _size; i++)
    {
        printf("Enter # at index %i\n",i);
        scanf("%i",&ptr[i]);
    }
    for (int i = 0; i < _size; i++)
    {
        printf("# at index %i=%i\n",i,ptr[i]);
    }
    

}
//array of characters at runtime
int main()
{

}

////////////////////////////////////////
///Read integers as most commonly used
///and deallocate at specific time
int main()
{
    int _size;
    printf("Enter Array size\n");
    scanf("%i",&_size);//5
    int *ptr=(int *)malloc(_size * sizeof(int));
    //from this moment int*ptr === int ptr[5]
    for (int i = 0; i < _size; i++)
    {
        printf("Enter # at index %i\n",i);
        scanf("%i",&ptr[i]);
    }
    for (int i = 0; i < _size; i++)
    {
        printf("# at index %i=%i\n",i,ptr[i]);
    }


    ////we wanna deallocate place in heap we stored
    //free(ptr);
    //////free -> remove protection
    //for allocated bytes
    ///so that any app can write in this place
    ///REMEMBER
    //ptr will still carries 0x10
    // =>undefined address
    //free dosen't remove values/state
    // => remove protection
    //
    //print ptr[0] //rubbish //10//runtime error
    //====>ptr=malloc(60);
    //
    //dangerous memory leackage
    //
    ///
    //
    ///
    ///
    //

}

//////////////////////////////////
//dangerous memory leackage
int* TryMe()
{
    int * tmpPtr=(int*)malloc(20);
    //for loop 10->50

    return tmpPtr;

    //free(tmpPtr);
}
int main()
{
//     TryMe();
//     TryMe();
//     TryMe();

    ////////////////
    int* ptr=TryMe();
    free(ptr);
}
/////////////////////////////////////////////////
//dynamic allocation for array of pointers

int main()
{
    //int * ptr=malloc(20);
    int col;
    printf("Enter col Size\n");
    scanf("%i",&col); //4
    int *ptrArr[3];

    ptrArr[0]=malloc(col * sizeof(int));
    ptrArr[1]=malloc(col * sizeof(int));
    ptrArr[2]=malloc(col * sizeof(int));


    free(ptrArr[0]);
    free(ptrArr[1]);
    free(ptrArr[2]);

}

int main()
{
    int row,col;
    printf("Enter row Size\n");
    scanf("%i",&row); //3
    printf("Enter col Size\n");
    scanf("%i",&col); //4
    int* *ptrArr;

    ptrArr=/*(int**)*/malloc(row * sizeof(int*));
    //from this momemt int ** ptrArr===int *ptrArr[3]
    ptrArr[0]=malloc(col * sizeof(int));
    ptrArr[1]=malloc(col * sizeof(int));
    ptrArr[2]=malloc(col * sizeof(int));
    //from this momemt int *ptrArr[3]===int ptrArr[3][4]

    ptrArr[0][0]=1;

    free(ptrArr[0]);
    free(ptrArr[1]);
    free(ptrArr[2]);
    free(ptrArr);

}
//WRONG
int main()
{
    int row,col;
    printf("Enter row Size\n");
    scanf("%i",&row); //3
    printf("Enter col Size\n");
    scanf("%i",&col); //4
    int *ptrArr;

    ptrArr=/*(int**)*/malloc(row * sizeof(int*));
    //from this momemt int ** ptrArr===int *ptrArr[3]
    ptrArr[0]=malloc(col * sizeof(int));
    ptrArr[1]=malloc(col * sizeof(int));
    ptrArr[2]=malloc(col * sizeof(int));
    //from this momemt int *ptrArr[3]===int ptrArr[3][4]

    ptrArr[0][0]=1; //compile Error

    free(ptrArr[0]);
    free(ptrArr[1]);
    free(ptrArr[2]);
    free(ptrArr);

}




/////////////////////////////////////////////////
//pointer to struct
struct Employee
{
    int id;
    char name[12];
    int age;
};

int main()
{
    int empSize=3;
    struct Employee *empPtr= 
    (struct Employee *) 
    malloc(empSize * sizeof(struct Employee));


    empPtr[0].id=1;
    strcpy(empPtr[0].name,"Sara");
    empPtr[0].age=22;

    empPtr->id=1;
    (*empPtr).id=1
}
////////////////////////////////////////////
//////////////////////////////////////////////////
///recursive function
//function calls itself
//functions contain
//1- for loop plus
//2- it ends with certain break
////1     0

//3- use with programming/mathematical equations
///factorial    4! =
///power       2P3=   ZERO

//stack overflow
void Print()
{
    Print();
}

int main()
{
    Print();
}

//Factorial
int Fact(int num)
{
    if(num==1)
    {
        return 1;
    }
    else
    {
        return num * Fact(num-1);
    }
}

int main()
{
    int x=4;
    int result=Fact(x);
}


////////
int Power(int _base,int _p)
{
    if(_p==0)
    {
        return 1;
    }
    else
    {
        return _base * Power(_base,_p-1);
    }
}

/////////////////////////////////////////////////////

//Lab Assignments


///1- try dynamic allocation
// for pointer to integer read and write  2ways
///2- try dynamic allocation for Array
// of pointers to integers read and write
//// int *arr[3] -> int arr[3][4]

//3- int **ptrArr;

///4- one employee with line editor
char* LineEditor
(int _size,int col,int row,int startKey,int endKey)
{
    char *arr;
    arr=malloc(_size * sizeof(char));  //char arr[30]
}

//5-One employee
struct Employee e1;
//gotoxy 1,1
//print
//gotoxy 1,1
//print
//gotoxy 1,1
//print
//gotoxy(34+5,87);
//scanf("%i",&e1.id);
e1.id=atoi( LineEditor(5,55,66,48,57));

e1.salary=atof( LineEditor(5,66,77,48,57));
//gotoxy(345,56);
//scanf("%",&e1.name);
strcpy(e1.name,LineEditor(15,44,22,65,104));


//6-(BONUS)MULTI Line EDITOR
//7-(BONUS El bonus)MULTI Line EDITOR



