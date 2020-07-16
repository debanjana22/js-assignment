/*String Functions*/
var name = "Debanjana", lname = " Bhattacharya", age = 29;
console.log(name.charAt('2')); //Returns the character at the specified index (position)
console.log(name.charCodeAt('2')); //Returns the Unicode of the character at the specified index
console.log(name.concat(lname)); //Joins two or more strings, and returns a new joined strings
console.log(name.endsWith('na')); //Checks whether a string ends with specified string/characters
console.log(String.fromCharCode(65)); //Converts Unicode values to characters
console.log(name.indexOf('j')); //Returns the position of the first found occurrence of a specified value in a string
console.log(name.includes('ban')); //Checks whether a string contains the specified string/characters
console.log(name.lastIndexOf('n')); //Returns the position of the last found occurrence of a specified value in a string
console.log(name.localeCompare(lname)); //Compares two strings in the current locale
console.log(name.match(/anj/g)); //Searches a string for a match against a regular expression, and returns the matches
console.log(name.repeat(2)); //Returns a new string with a specified number of copies of an existing string
console.log(name.replace('anjana','olina')); //Searches a string for a specified value, or a regular expression, and returns a new string where the specified values are replaced
console.log(name.search('jan')); //Searches a string for a specified value, or regular expression, and returns the position of the match
console.log(name.slice(0,7)); //Extracts a part of a string and returns a new string
console.log(name.split("a")); //Splits a string into an array of substrings
console.log(name.substr(3,4)); //Extracts the characters from a string, beginning at a specified start position, and through the specified number of character
console.log(name.substring(3,7)); //Extracts the characters from a string, between two specified indices
console.log(name.toLocaleLowerCase()); //Converts a string to lowercase letters, according to the host's locale
console.log(name.toLocaleUpperCase()); //Converts a string to uppercase letters, according to the host's locale
console.log(name.toLowerCase()); //Converts a string to lowercase letters
console.log(name.toUpperCase()); //Converts a string to uppercase letters
console.log(age.toString()); //Returns the value of a String object
console.log(lname); //Removes whitespace from both ends of a string
console.log(lname.trim()); //Removes whitespace from both ends of a string
console.log(age.valueOf()); //Returns the primitive value of a String object

/*Array Functions*/
var cars = ["Maruti", "Hyundai", "Tata"];
var cars2 = ["BMW", "Audi", "Tesla"];
console.log(cars.concat(cars2)); // Joins two or more arrays, and returns a copy of the joined arrays
console.log(cars.copyWithin(2,1)); // Copies array elements within the array, to and from specified positions
console.log(cars.entries()); // Returns a key/value pair Array Iteration Object
console.log(cars.fill(4)); // Fill the elements in an array with a static value
cars.forEach(function(item, index){
    console.log(index + "->" + item);
}); // Calls a function for each array element

console.log(Array.from(name)); // Creates an array from an object
console.log(Array.isArray(cars)); // Checks whether an object is an array
console.log(cars.keys()); // Returns a Array Iteration Object, containing the keys of the original array
console.log(cars.pop()); // Removes the last element of an array, and returns that element
console.log(cars.push('Audi')); // Adds new elements to the end of an array, and returns the new length
console.log(cars.reverse()); // Reverses the order of the elements in an array
console.log(cars.shift()); // Removes the first element of an array, and returns that element
console.log(cars.toString()); // Converts an array to a string, and returns the result
console.log(cars.unshift('BMW')); // Adds new elements to the beginning of an array, and returns the new length
console.log(cars.valueOf()); // Returns the primitive value of an array

