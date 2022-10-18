#include <iostream>
using namespace std;
bool isvowel(char ch)
{
    ch = toupper(ch);
    return (ch == 'A' || ch == 'E' || ch == 'I' || ch == 'O' || ch == 'U');
}
int countVowel(string str, int n)
{
    if (n == 1)
        return isvowel(str[n - 1]);

    return countVowel(str, n - 1) + isvowel(str[n - 1]);
}
int main()
{
    string str="iiit bhubaneswar";
    cout << "number of vowel in this string is " << countVowel(str, str.length());

    return 0;
}