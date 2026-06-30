let arr = [2,3,4,5,6]
console.log(arr);

// create new array 
let a = arr.map((value, index)=>{
    return value +1, index
})
console.log(a)

//filter and create new array
let b = arr.filter((a)=>{
    return a<=5
})
console.log(b);


// reduce used for addition 
