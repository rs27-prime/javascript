
// basic loop 
for(a=0;a<=10;a++){
    console.log(a)
}

// for in loop
let list = {
    "name" : "rushikesh",
    "age" : 34,
    "contact" : 3452343413 
}
for (let b in list){
    console.log(list[b])
}

// for of loop
for (let c of "rushikesh"){
    console.log(c)
}

// while loop 
let d = prompt("enter number")
d = Number.parseInt(d)
let e = 0
while(e<d){
    e++
    console.log(e)
}


// do while loop
let f = prompt("enter number");
f = Number.parseInt(f);
let g = 0;

do{
  console.log(g);
  g++;
} while (f < g);
