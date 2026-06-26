function add(a,b){
    return a + b;
}

function average(a,b){
    return (a + b) / 2;
}

function multiplication(a,b){
    return (a * b) / 2;
}

const sub = (a,b) =>{ 
     return a - b;
     }

     const greet = () =>{
        console.log("Good morning");
     }
let a  = parseInt(prompt("Enter first number: "));
let b  = parseInt(prompt("Enter second number: "));  

console.log("The sum of " + a + " and " + b + " is: " + add(a,b));
console.log("The average of " + a + " and " + b + " is: " + average(a,b));
console.log("The multiplication of " + a + " and " + b + " is: " + multiplication(a,b));
console.log("The substraction of " + a + " and " + b + " is: " + sub(a,b));
greet();
