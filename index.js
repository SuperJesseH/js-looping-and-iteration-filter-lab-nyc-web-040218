// Code your solution in this file


function findMatching(a,s) {
  // This function takes an array of drivers and a string as arguments, and returns the matching list of drivers. The function should be case insensitive.

  result = a.filter(driver => driver.toLowerCase() === s.toLowerCase())
  return result

}

function fuzzyMatch(a,s) {
  // This function takes an array of drivers and a string as arguments for querying the array, and returns all drivers whose names begin with the provided letters.
  return a.filter(driver => driver.slice(0,s.length) === s)

}

function matchName(a,s) {
// This function takes an array of drivers and a string as arguments. In this function, each element of the drivers array is a JavaScript object that has a property of name. The function should return each element whose name property matches the provided string argument.
return a.filter(driver => driver.name === s)
}
