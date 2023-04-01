function maximum(Arr: number[]): number 
{
    let largest1 =( Arr[0]);
    let largest2 =( Arr[0]);


    for (let i = 1; i < (Arr.length); i++)
     {
      if (Arr[i] > largest1) 
      {
        largest1=largest2
        largest1 = Arr[i];
      }
      else if(Arr[i]>largest2 && Arr[i]<largest1)
      {
        largest2=Arr[i];
      }
    }
    return largest2;
  }
  
  const Num = [23, 89, 6, 29, 56, 45, 77, 32];
  
  const Ret = maximum(Num);
  
  console.log(" Second Largest number:" + Ret);
  