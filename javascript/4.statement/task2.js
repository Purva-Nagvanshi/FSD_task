let num1 = 10
let num2 = 30
let num3 = 50
let num4 = 70
if(num1>num2)
{
    if(num1>num3)
    {
        if(num1>num4)
        {
            console.log(num1+"is greater")
        }
        else{
            console.log(num4+"is greater")
        }
    }
}
else if(num2>num3)
{
    if(num2>num4){
        console.log(num2+ "is greater")
    }
    else{
        console.log(num4+ "is greater")
    }
}
else if(num3>num4)
{
    console.log(num3+ "is greater")
}
else {
    console.log(num4+ "is greater")
}


