function getAverage (a,b,c,d,e,f){
	
	var average = (a + b + c + d + e + f) / 6;
	console.log(average);
	return average;
	
}

var myResult = getAverage(7,8,9,10,11,12);
console.log("the average is " + myResult);

function getDifference (a,b){
	
	var difference = a / b;
	console.log(difference);
	return difference;
}

var myResult = getDifference(6,2);
console.log("the difference is " + myResult);

function getStr(str1,str2){
	
	var res = str1.concat(str2);
	console.log(res);
	return res;
}

var myResult = getStr(a + b);
console.log("the full string is " +myResult); 