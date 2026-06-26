let a = "Hrushikesh"
let b = 'Valvi'
boy1 = "rushi"
boy2 = "devil"
fruit = "bana\"nna"  // escape character

console.log(a)
console.log(a.length)  // length of a string
console.log(a[0])  // first character of a string
console.log(a[1])  // second character of a string
console.log(`${boy1} and ${boy2} are same person`)  // string interpolation
console.log(fruit)  // banana
console.log(a.toUpperCase()) 
console.log(a.toLowerCase())    
console.log(a.slice(1, 6))   // last index is not included
console.log(a.slice(1))   // last index is not included
console.log(a.replace("Hrushikesh", "White Devil"))   // replace a string
console.log(a.concat("is known as ", boy2, " ok"))   // concatenate two strings

let space = "   Hrushikesh Valvi   "
console.log(space)
console.log(space.trim())   // remove white spaces from both ends