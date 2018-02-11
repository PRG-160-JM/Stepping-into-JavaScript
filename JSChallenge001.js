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