#include <iostream>

using namespace std;
int answer(int b,int p);
int main()
{
    cout << "Enter the base/radix: " << endl;
    int b;
    cin>>b;
    cout<<"Enter the power :"<< endl;
    int p;
    cin>>p;
    int ans=answer(b,p);
    cout<<ans<<endl;

    return 0;
}
int answer(int b,int p)
{
    if(p==0)
    {
        return 1;
    }
    else if(p==1)
    {
        return b;
    }
    else
    {
        if(p%2!=0)
        {
            return b*answer(b,(p-1)/2)*answer(b,(p-1)/2);
        }
        else
        {
            return answer(b,p/2)*answer(b,p/2);
        }
    }
}