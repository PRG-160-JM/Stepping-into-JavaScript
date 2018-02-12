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

var num = "";

function count(num) {
	console.count(num);
	return "Finally " + num;
}
console.count(8);

/*Checkpoint 4 */

/*Checkpoint 5 */

var str = "This homework will not phase me.";
var words = str.split(" ");

console.log(words);

/*Checkpoint 6 */

document.getElementById("p1").innerHTML = "I do not think this is correct!";

	