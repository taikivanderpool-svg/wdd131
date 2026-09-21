//how to manipulate the DOM with JavaScript

//grab h1 from the page
let heading = document.querySelector("h1");

console.log(heading);

//change the text of the element
heading.textContent = "Changed the heading"

//change the text color
heading.style.color = "#046284";

//pick your own style and change it 
let lists = document.querySelector(".list");

lists.style.fontSize = "40px";
lists.style.color = "red";

//retrieve an ID
document.getElementById("topics").style.color = "green";
//same thing 
document.querySelector("#topics").style.color = "green";

//select the image
let image = document.querySelector("img"); 
console.log(image.getAttribute("src"));

image.setAttribute("src", "https://upload.wikimedia.org/wikipedia/commons/4/45/Eopsaltria_australis_-_Mogo_Campground.jpg?utm_source=en.wikipedia.org&utm_campaign=index&utm_content=original")


let selectElem = document.getElementById('webdevlist');
selectElem.addEventListener('change', function(){
    let codeValue = selectElem.value;
    console.log(codeValue);
})
                