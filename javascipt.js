// let a = new Promise((resolve, reject) => {
//     reject(new Error("their is a error"))
    
// }).catch((Error)=>{
// console.log("their is error in code 1");

// })

    // let b = new Promise((resolve, reject) => {
    //     resolve(true)
    // }).then((value)=>{
    // console.log("everything is ok");
    // throw new Error("This is new error")
    
    // }).catch((Error)=>{
    // console.log("thier is something");

    // })


    // let promise_all = Promise.all([p1,p2,p3])
    // let promise_all = Promise.allSettled([p1,p2,p3])
    // let promise_all = Promise.race([p1,p2,p3])
    // let promise_all = Promise.any([p1,p2,p3])
    // let promise_all = Promise.resolve(6)
    // let promise_all = Promise.reject(new Error("this is new error"))
    // promise_all.then((value)=>{
    //     console.log(value);
        
    // })