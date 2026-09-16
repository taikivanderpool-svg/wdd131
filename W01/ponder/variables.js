
//Declare a variable 
let age = 25;

//reference the variable 
//like print in python
console.log(age); 

//change the mutable variable 
age = 26; 

//constant variable
const name = "partridge with a pear"; 


const username = "Partridge"

if(age == 26){
    let nextYear = (26 + 1);

    let message = ("congradulations " + username + " next year you will be " + 
    nextYear + " years old..." + " horay")
    console.log(message);

    let favoriteColor = "not a color"
    console.log(favoriteColor)
    
    //in the scope of this if statement
    //local variable
    const name = "new one"
    console.log(name);
}

let favoriteColor = "colors"

console.log(favoriteColor)

//cgrab our h1 from the DOM and color it blue with css
document.querySelector("h1").style.color = "blue" ; 