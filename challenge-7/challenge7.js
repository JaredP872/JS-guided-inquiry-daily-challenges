// In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?

// Examples

// makeNegative(1);    // return -1
// makeNegative(-5);   // return -5
// makeNegative(0);    // return 0
// makeNegative(0.12); // return -0.12

function makeNegative(num) {
  if (num > 0) {
    return -num;
  } else {
    return num;
  }
}

//Explanation:

// This problem required me to return any negative numbers and make all positive numbers negative as well. I created a conditional if statement where I passed in the value of num and checked if it was greater than 0. If so, that would mean that it was positive and so I would go on to return that value with a negative sign Infront of it changing it to a negative value. Then I ran and else statement to return the value of num if it wasn’t the first condition which means that it would have to be negative by default. That’s how I got all negative numbers and changed all positive values to negative.
