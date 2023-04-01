function Summation(Arr: number[]): number {
    let Sum = Arr[0];
    for (let i = 1; i < Arr.length; i++) 
    {
       Sum=Sum+Arr[i];
    }
    return Sum;
  }
  
  const Num = [23,6,7,4,5,7];
  
  const Ret = Summation(Num);
  
  console.log("Summation is " + Ret);
  