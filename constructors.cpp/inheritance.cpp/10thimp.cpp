#include <iostream>
using namespace std;

/*
case 1:
class B:public a
// order of exceution of constructor
first a and b
 case 2:
 class A:public b ,public c{
    //order of excuetion 
    first b then c then a
    
 }
 case 3:
 class a: public B,virutal public c {
    //order of excetion 
    first c then b then a
 }



*/

class Base1{
    int data1;
    public:
        Base1(int i){
            data1 = i;
            cout<<"Base1 class constructor called"<<endl;
        }
        void printDataBase1(void){
            cout<<"The value of data1 is "<<data1<<endl;
        }
};

class Base2{
    int data2;

    public:
        Base2(int i){
            data2 = i;
            cout << "Base2 class constructor called" << endl;
        }
        void printDataBase2(void){
            cout << "The value of data2 is " << data2 << endl;
        }
};

class Derived: public Base2, public Base1{
    int derived1, derived2;
    public:
        Derived(int a, int b, int c, int d) : Base2(b), Base1(a)
        {
            derived1 = c;
            derived2 = d;
            cout<< "Derived class constructor called"<<endl;
        }
        void printDataDerived(void)
        {
            cout << "The value of derived1 is " << derived1 << endl;
            cout << "The value of derived2 is " << derived2 << endl;
        }
};


int main(){
    Derived harry(1, 2, 3, 4);
    // harry.printDataBase1();
    harry.printDataBase2();
    // harry.printDataBase1();
    harry.printDataDerived();
    return 0;
}