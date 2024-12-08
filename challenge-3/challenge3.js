// Create a function which answers the question "Are you playing banjo?".
// If your name starts with the letter "R" or lower case "r", you are playing banjo!

// The function takes a name as its only argument, and returns one of the following strings:

// name + " plays banjo"
// name + " does not play banjo"
// Names given are always valid strings.

function areYouPlayingBanjo(name) {
  if (name.at(0) === "R" || name.at(0) === "r") {
    return `${name} plays banjo`;
  }
  return `${name} does not play banjo`;
}

//Explanation:

// In this challenge I created a function and passed a conditional into it. I made it so that if the parameters first character was an upper-cased R or a lowercased r then the function would return the parameter name plus the string ‘plays banjo’. If this condition wasn’t met than the else condition would run and say the parameter name plus the string ‘does not play banjo’
