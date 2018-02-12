/* JavaScript Document */

/* Checkpoint 1 */


function getPrimeNum(value)
{
    for(var num = 2; num < value; num++) 
	{
        if(value % num === 0) 
			{
				return false;
			}
    }
    return value > 1;
}

console.log(getPrimeNum(56));

/*Checkpoint 2 */

function getYear(value)
{
	var year = 1996; year++
	{
		if(value >= year)
			{
				document.write("You are too young!")
				
			}
		else if(value <= year)
			{		
				document.write("You are old enough, turn up!")
				
			}
	}
	
}
console.log(getYear(1995));

/*Checkpoint 3 */

function countNum(num)
{
	
	console.count(num);
	
}
console.log(countNum(8));