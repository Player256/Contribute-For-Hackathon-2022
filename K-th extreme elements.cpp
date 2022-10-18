#include <bits/stdc++.h>
using namespace std;

 int *largensmall(int *arr, int len)
 {
     int A[len] = {0};
     int i, j;
     for (i = 0; i < len; i++)
     {
         for (j = 0; j < len; j++)
         {
             if (arr[i] < arr[j])
             {
                 A[i]++;
             }
         }
     }
     return A;
 }
int main()
{
    int arr[] = { 2, 6, 4, 32, 40, 1, 0, -2, -8, 22, -1};
    int len = sizeof(arr) / sizeof(int), k;
    cin >> k;
    int A[len] = {0};
    int i, j;
    for (i = 0; i < len; i++)
    {
        for (j = 0; j < len; j++)
        {
            if (arr[i] < arr[j])
            {
                A[i]++;
            }
        }
    }
    int max, min;
    for (i = 0; i < len; i++)
    {
        if (A[i] == k - 1)
            max = arr[i];
        if (A[i] == len - k)
            min = arr[i];
    }
    cout << k << "th smallest = " << min << endl;
    cout << k << "th largest = " << max << endl;

    return 0;
}