#include <stdio.h>

int main() 
{
int num, temp=0, rem, i;
printf("ALL REVERSE NUMBERS\n");
for(i=1;i<1000;i++)
{
    num=i;
    temp=0;
while(i>0)
{
    rem=num%10;
    temp=temp*10+rem;
    num=num/10;
printf("%d\n", temp);
}
}
    return 0;
}