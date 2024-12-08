// Create a function that checks if a number n is divisible by two numbers x AND y. All inputs are positive, non-zero numbers.

// Examples:
// 1) n =   3, x = 1, y = 3 =>  true because   3 is divisible by 1 and 3
// 2) n =  12, x = 2, y = 6 =>  true because  12 is divisible by 2 and 6
// 3) n = 100, x = 5, y = 3 => false because 100 is not divisible by 3
// 4) n =  12, x = 7, y = 5 => false because  12 is neither divisible by 7 nor 5

function isDivisible(n, x, y) {
  return n % x === 0 && n % y === 0;
}

//Explanation:

// This question was a bit confusing due to the bit of math that I had to do research on. Other than the time I took doing that, once I understood how the modulo symbol worked I understood that the problem wanted me to check for divisibly for the number n. n had to be divisible by the 2 other numbers in the parameter x and y. in order to do this I created a function and added the return keyword inside of it. After the return key word, I went to check if the value n modulo x would be strictly equal to 0 and the value y would be strictly equal to 0. If so, then they would both be divisible by n. If they weren’t then x and y would return the remainder 1 as the operation wouldn’t be even.
