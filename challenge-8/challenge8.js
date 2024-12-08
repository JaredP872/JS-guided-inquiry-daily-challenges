// Complete the solution so that it reverses the string passed into it.

// 'world'  =>  'dlrow'
// 'word'   =>  'drow'

function solution(str) {
  return str.split("").reverse().join("");
}

//Explanation:

// This problem required me to reverse whatever string that was put into the argument and passed into the parameter of my function. I needed to use 3 different methods to achieve this. First, I created my function and add the return keyword within it. After which I went on to place the parameter value str and added the method split after it. The split method allowed me to split the characters in a string into substrings. Once I had my string split, I used the reverse method which allowed me to put my string in opposite order and then finally I used the join method to rejoin my reversed string in revered order.
