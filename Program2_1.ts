function maximum(Arr: number[]): number 
{
    let largest = Arr[0];

    for (let i = 1; i < Arr.length; i++)
     {
      if (Arr[i] > largest) 
      {
        largest = Arr[i];
      }
    }
    return largest;
  }
  
  const Num = [23, 89, 6, 29, 56, 45, 77, 32];
  
  const Ret = maximum(Num);
  
  console.log("Largest number:" + Ret);
  