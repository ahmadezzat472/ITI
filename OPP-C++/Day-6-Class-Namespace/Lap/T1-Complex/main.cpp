#include <iostream>

using namespace std;


struct Complex {
    private:
        int real;
        int img;

    public:
        void SetReal(int _real){
            this->real = _real;
        }
        int GetReal() const{
            return real;
        }

        void SetImg(int _img){
            (*this).img = _img;
        }
        int GetImg() const{
            return img;
        }

        void Print(){
            if(real == 0){
                if(img == -1)
                    cout<<  "-i" << endl;
                else if(img == 1)
                    cout<<  "i" << endl;
                else if(img == 0)
                    cout<< "0" << endl;
                else
                    cout<< img << "i" << endl;
            } else if(img < 0){
                if(img == -1)
                    cout<< real << "-i" << endl;
                else
                    cout<< real << img << "i" << endl;
            } else
                cout<< real << "+" << img << "i" << endl;
        }

        Complex Add(const Complex& right) const{ // followed to this
            Complex result;
            result.real = this->real + right.real;
            result.img = this->img + right.img;
            return result;
        }
};

Complex AddComplex(const Complex& left,const Complex& right)
{
    Complex result;
    int r=left.GetReal()+right.GetReal();
    int i=left.GetImg()+right.GetImg();
    result.SetReal(r);
    result.SetImg(i);
    return result;
}

int main()
{
    Complex comp1, comp2;
    int real;

    cout << "enter real#1: ";
    cin >> real;
    comp1.SetReal(real);

    cout << "enter img#1: ";
    cin >> real;
    comp1.SetImg(real);

    cout << "the complex#1: ";
    comp1.Print();
    cout << endl;

    cout << "enter real#2: ";
    cin >> real;
    comp2.SetReal(real);

    cout << "enter img#2: ";
    cin >> real;
    comp2.SetImg(real);

    cout << "the complex#2: ";
    comp2.Print();
    cout << endl;

    Complex result = comp1.Add(comp2);
    result.Print();
    return 0;
}
