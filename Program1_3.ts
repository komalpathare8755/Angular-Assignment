
function DisplayFactors(Num:number):void 
{
      let Fact=0;
      let i = 0;

      for (i=0;i<=Num;i++)
      {
            if(Num%i==0)
            {
                  Fact=console.log("%d"+i);
            }
      } 
}

var No : number=20;

var Ret : number=0;

DisplayFactors(No);
console.log("The Factors are ");