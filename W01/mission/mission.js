//get the value of the HTML body tag
//get the value of the drop down 
//add event listener to activate a function when the dropdown is changed
//when the dropdown is changed, call a function to change the screen
//when the drop down is changed to "dark", style the HTML body tag to change 
//the text white and background black
//when the drop down is changed to "light", style the HTML body tag to change 
//the text black and background white


//get the value of the HTML body tag
let body = document.querySelector("body");

//get the value of the drop down 
let selectElem = document.querySelector('#select');

//get the image
let image = document.querySelector("img");

selectElem.addEventListener('change', changeMode);

function changeMode() {
    let value = selectElem.value;
    if (value === "light") {
        body.style.color = "#000";
        body.style.backgroundColor = "#FFF";
        image.setAttribute("src", "https://wddbyui.github.io/wdd131/images/byui-logo-blue.webp")
    }
    else if (value === "dark") {
        body.style.color = "#FFF";
        body.style.backgroundColor = "#000";
        image.setAttribute("src", "https://wddbyui.github.io/wdd131/images/byui-logo-white.png")

    }
}