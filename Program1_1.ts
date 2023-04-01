
function Maximum(No1:number,No2:number,No3:number):void
{
    if(No1 >= No2 && No1 >= No3)
    {
        console.log("%d is the largest number."+No1)
    }
    
    if(No2 >= No1 && No2 >= No3)
    {
        console.log("%d is the largest number."+No2)
    }

    if(No3 >= No1 && No3>= No2)
    {
        console.log("%d is the largest number."+No3)
    }

}

var A=23
var B=89
var C=6

Maximum(A,B,C);

