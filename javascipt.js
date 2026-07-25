try {
    throw new ReferenceError("Rushi is too good")
} catch (error) {
    console.log(error.message);
    console.log(error.name);
    console.log(error.stack);   
}



try {
    console.log("if this not run");
    console.log(program);
    
} catch (error) {
    console.log("show this error");
    
}

finally{
    console.log("this run even after error");
    
}