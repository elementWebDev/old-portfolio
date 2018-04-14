// JavaScript Document
var myStr = "FirstLine\n\\SecondLine\\\rThirdLine";// Change this line


/* 
		----------------------------------
		Manipulating Arrays
		.push() .pop() .shift() .unshift
		----------------------------------
*/


.push() // puts value at end of array 
/*
// Example
var ourArray = ["Stimpson", "J", "cat"];
ourArray.push(["happy", "joy"]); 
// ourArray now equals ["Stimpson", "J", "cat", ["happy", "joy"]]

// Setup
var myArray = [["John", 23], ["cat", 2]];

// Only change code below this line.
*/
myArray.push(["dog", 3]); 
// myArray now equals [["John", 23], ["cat", 2], ["dog", 3]]



.pop() // removes last item of array
/*
// Example
var ourArray = [1,2,3];
var removedFromOurArray = ourArray.pop(); 
// removedFromOurArray now equals 3, and ourArray now equals [1,2]

// Setup
var myArray = [["John", 23], ["cat", 2]];

// Only change code below this line.
*/
var removedFromMyArray = myArray.pop();
// myArray now equals ["John", 23]



.shift() // removes first item of array
/*
// Example
var ourArray = ["Stimpson", "J", ["cat"]];
removedFromOurArray = ourArray.shift();
// removedFromOurArray now equals "Stimpson" and ourArray now equals ["J", ["cat"]].

// Setup
var myArray = [["John", 23], ["dog", 3]];

// Only change code below this line.
*/
var removedFromMyArray = myArray.shift();




.unshift() // .unshift() works exactly like .push(), but instead of adding the element at the end of the array, unshift() adds the element at the beginning of the array.
// Example
var ourArray = ["Stimpson", "J", "cat"];
ourArray.shift(); // ourArray now equals ["J", "cat"]
ourArray.unshift("Happy"); 
// ourArray now equals ["Happy", "J", "cat"]

// Setup
var myArray = [["John", 23], ["dog", 3]];
myArray.shift();

// Only change code below this line.
myArray.unshift(["Paul", 35]);




//5 sub arrays
var myList = [
  ["milk", 1],
  ["eggs", 2],
  ["cereal", 1],
  ["lunchMeat", 4],
  ["bread", 2]
];



// Only change code below this line
function reusableFunction() {
  console.log("Hi World");
}
reusableFunction(); // calling the function




//Greater Than or Equal to
function testGreaterOrEqual(val) {
  if (val >= 20) {  // Change this line
    return "20 or Over";
  }
  
  if (val >= 10) {  // Change this line
    return "10 or Over";
  }

  return "9 or Under";
}

// Change this value to test
testGreaterOrEqual(125);




