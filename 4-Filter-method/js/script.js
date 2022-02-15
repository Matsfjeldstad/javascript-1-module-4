// Filter method

// If you want to filter the data displayed to a user,
// you can use the filter method.
// The filter method is used to create a new array from an existing
// array that the filter method is called on.
//

// The filter method takes a function as an argument. This function receives each item in the array as an argument.
// If the function returns true, the item is added to the new array.

// exsample 1

const number = [1, 3, 5, 16, 55, 23, 53, 2];

const filteredNumber = number.filter(filternumber);

function filternumber(number) {
  if (number > 5) {
    return true;
  }
}
console.log("before ", number);

console.log(filteredNumber);
