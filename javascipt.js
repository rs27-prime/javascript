// basic data types 
// let x = "change value but not redeclare"
// var y = "changeable and redeclare"
// const z = "Devil"

// let a = "Rushikesh"
// let b = 'Valvi'
// let c = 343
// let d = BigInt(445454534454545.5)
// let e = true
// let f = null


// let g = prompt("Get input from user :")
// let i = alert("show alert message")
// let h = console.log("show input in console");
// console.error("show error message")
// console.warn("show warning message in console");


// function 
// function addition (a,b){
//     return a + b
// }

// console.log(addition(4,5));


// const sub = (a,b) =>{
// return a-b
// } 

// console.log(sub(5,6));


// loop 

// for (let index = 0; index < 5; index++) {
//     console.log(index);
    
// }

// let array = [3,5,6,78,8,6,5,3356,758,6787]

// for (let index = 0; index < array.length; index++) {
//     const element = array[index];   
//     console.log(element);
// }

// let obj = {
//     name : "Rushikesh",
//     sirname : "valvi",
//     city : "Nashik" 
// }

// for (const key in obj) {
    
//     const element = key;
//     console.log(key, obj[key]);   
// }


// let name = "rushikesh"
// for (const element of name) {
//     console.log(element)
// }


// array.forEach(element => {
//    console.log(element);
    
// });


// loop do while and while 
// if else condtion switch case condition 
// expression 

// dom method

// console.table(obj)
// let b = document.getElementsByClassName("useClass")
// console.log(b);

// let a = document.getElementById("usedId")
// console.log(a);


// let d = document.getElementsByTagName("div")[0]
// console.log(d)
//  d.style.background = "green"


//  class change method add remove and and list 
// dom manupulation method add text before and after and all 



// let check = document.querySelector(".first")
// check.innerHTML = "this line changed"

// let all = document.querySelector("p")
// console.log(all);


// let classCheck = document.querySelector(".first")
// classCheck.classList.add("green")
// classCheck.classList.remove("green")
// classCheck.classList.toggle("green")
// console.log(classCheck.classList.contains("style"));
// classCheck.classList.replace("green", "red")


// let a = document.querySelector(".first")
// a.classList.add("green")
// a.classList.toggle("green")
// a.classList.remove("green")
// a.classList.toggle("green")
// console.log(a.classList.contains("green"));
// a.classList.replace("green", "red")

// console.log(a.textContent);

// let para = document.getElementsByTagName("p")
// para.color = "yellow"

// let mainline = document.querySelectorAll(".first")
// let newButton = document.createElement("button")
// newButton.innerHTML = "Click Me"
// document.body.append(newButton)

// let demo = document.querySelector(".first")
// demo.setAttribute("class", "green")
// demo.setAttribute("id", "green")
// console.log(demo.getAttribute("id"));



// let arr = [1,2,3,45,5,6,7]
// let newarr = arr.map((value) =>{
//     return value *2 ;
// })
// console.log(newarr)

// let newValue = arr.filter((value)=>{
//     return value < 3
// }) 

// console.log(newValue);


// string operation 
 
// let a = "this is string"
// let name ='Rushikesh' 
// let sirname ='valvi'

// console.log(a);
// console.log(name[0]);
// console.log(name[1]);
// console.log(name[2]);
// console.log(name[3]);
// console.log(name[4]);
// console.log(name[5]);
// console.log(name[6]);
// console.log(name[7]);
// console.log(name[8]);

// let mix = name.concat(" this is his his sirname ",sirname)
// console.log(mix);

// console.log(`my name is ${name} and sirname is ${sirname} `);

// document.body.style.background = "green"

// location.href = "https://www.google.com"

// accessing nodes in div 
// first node
// last node
// NodeList

// let newCheck = document.getElementsByTagName("p")[1]


// append 
// prepend
// before 
// after

// beoforestart
// after start 
// beforeend 
// after end


// create new element 
// assign to inner html
// // append in anything

// let divOuter = document.querySelector(".positionCheck")

// let checking = document.createElement("Div")
// checking.innerHTML = "this is new element that i create"
// divOuter.prepend(checking)
// divOuter.append(checking)
// divOuter.before(checking)
// divOuter.after(checking)

// divOuter.insertAdjacentHTML("beforebegin", "this is before Begin line")
// divOuter.insertAdjacentHTML("afterbegin", "this is afterbegin line")
// divOuter.insertAdjacentHTML("beforeend", "this is beforeend line")
// divOuter.insertAdjacentHTML("afterend", "this is afterend line")
