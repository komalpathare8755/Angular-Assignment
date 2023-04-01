
function Area(Rad:number,PI:number=3.14):number
{
    let Ans:number=0;

    Ans=PI*Rad*Rad;

    return Ans ;
}

var Ret : number=0;

 Ret=Area(5);

console.log("Area of  circle is "+Ret);

Ret=Area(6,3.14);

console.log("Area of  circle is "+Ret);