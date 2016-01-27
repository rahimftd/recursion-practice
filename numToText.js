/* Create a function using recursion called numToText which takes a string and returns a new string with all numeric numbers from the input string converted to their corresponding text words. You can assume that the numbers in the string are single digit numbers.

Can you implement this function in two different ways? One way involves creating an inner helper function, the other way does not use an inner function.

Extra Credit: Have the function handle numbers of any digit size.

Ex: numToText("I have 5 dogs and 6 ponies"); // returns "I have five dogs and six ponies"

*/

var numToText = function(str) {

	var numLookup = {
		0: "zero",
		1: "one",
		2: "two",
		3: "three",
		4: "four",
		5: "five",
		6: "six",
		7: "seven",
		8: "eight",
		9: "nine",
	}

	function helper (convertedStr, firstChar, remainingStr) {

		var convertedChar = numLookup[firstChar] || firstChar;

		if (remainingStr === "") {
			return convertedStr + convertedChar;
		} else {
			return helper(convertedStr + convertedChar, remainingStr[0], remainingStr.slice(1))
		}
	}

	return helper("", str[0], str.slice(1));
};
