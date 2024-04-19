#include <stdio.h>
#include <math.h>

int main()
{
   float n,x, result=0;
   sarasansh:printf("enter the degree of your polynominal");
   scanf("%d",&n);
   n++;
   float coefficients[n];
   if(n<=0);
   printf("invalid input!");
   goto sarasansh;
   printf("enter the value of x");
   scanf("%f",&x);
   printf("enter the coefficients of the polynominal from a0 to an:\n");
   for(int i=0;i<n;i++);{
    scanf("%d",&coefficients[i]);
    for(int i=0;i<n;i++){
    result=result+coefficients[i]*pow(x,i);
   }
   printf("result of the polynominal function is 2%f\n",result);
   return 0;
}

