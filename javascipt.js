console.log("show message in console");
console.error("this show error");
console.assert(5>6) // check condition only if true
console.warn("this is the warning")
console.info("this is important message");
 
 let obj = {a:2,b:3,c:4,d:5}
 console.table(obj)

 console.time("a") // while checking time runtime
 console.timeEnd("a")

let a = prompt("enter the number : ", "27")
alert("your script is working")

document.write(a)
let write = confirm("do you want me to write")
if(write){
document.write(a)    
}
else{
    document.write("please allowed me to write");
    
}
